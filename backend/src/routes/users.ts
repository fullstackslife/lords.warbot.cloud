import express from 'express';
import { PrismaClient } from '@prisma/client';
import { param } from 'express-validator';
import { validateRequest } from '../middleware/validateRequest';

const router = express.Router();
const prisma = new PrismaClient();

// Get user stats
router.get(
  '/:walletAddress/stats',
  [param('walletAddress').isEthereumAddress()],
  validateRequest,
  async (req, res) => {
    try {
      const user = await prisma.user.findUnique({
        where: { walletAddress: req.params.walletAddress },
        include: {
          tasks: {
            where: {
              status: 'COMPLETED',
            },
            orderBy: {
              updatedAt: 'desc',
            },
            take: 10,
          },
        },
      });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      const stats = {
        totalTasksCompleted: user.tasksCompleted,
        totalTokensEarned: user.tokensEarned,
        accuracy: user.accuracy,
        reputation: user.reputation,
        recentTasks: user.tasks.map((task) => ({
          id: task.id,
          status: task.status,
          reward: task.reward,
          completedAt: task.updatedAt,
        })),
      };

      res.json(stats);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch user stats' });
    }
  }
);

// Update user stats after task verification
router.post(
  '/:walletAddress/verify',
  [param('walletAddress').isEthereumAddress()],
  validateRequest,
  async (req, res) => {
    try {
      const { taskId, accuracy } = req.body;

      const user = await prisma.user.findUnique({
        where: { walletAddress: req.params.walletAddress },
      });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      const task = await prisma.task.findUnique({
        where: { id: taskId },
      });

      if (!task || task.userId !== user.id) {
        return res.status(404).json({ error: 'Task not found or not owned by user' });
      }

      // Update user stats
      const updatedUser = await prisma.user.update({
        where: { id: user.id },
        data: {
          tasksCompleted: user.tasksCompleted + 1,
          tokensEarned: user.tokensEarned + task.reward,
          accuracy: (user.accuracy * user.tasksCompleted + accuracy) / (user.tasksCompleted + 1),
          reputation: user.reputation + Math.floor(accuracy / 10),
        },
      });

      // Update task status
      await prisma.task.update({
        where: { id: taskId },
        data: { status: 'VERIFIED' },
      });

      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update user stats' });
    }
  }
);

export default router; 