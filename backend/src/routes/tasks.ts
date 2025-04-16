import express from 'express';
import { PrismaClient } from '@prisma/client';
import { body, param } from 'express-validator';
import { validateRequest } from '../middleware/validateRequest';

const router = express.Router();
const prisma = new PrismaClient();

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await prisma.task.findMany({
      where: {
        status: 'PENDING',
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

// Get task by ID
router.get(
  '/:id',
  [param('id').isUUID()],
  validateRequest,
  async (req, res) => {
    try {
      const task = await prisma.task.findUnique({
        where: { id: req.params.id },
      });
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json(task);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch task' });
    }
  }
);

// Update task
router.put(
  '/:id',
  [
    param('id').isUUID(),
    body('boundingBoxes').isArray(),
    body('walletAddress').isEthereumAddress(),
  ],
  validateRequest,
  async (req, res) => {
    try {
      const { boundingBoxes, walletAddress } = req.body;

      // Find or create user
      let user = await prisma.user.findUnique({
        where: { walletAddress },
      });

      if (!user) {
        user = await prisma.user.create({
          data: { walletAddress },
        });
      }

      // Update task
      const task = await prisma.task.update({
        where: { id: req.params.id },
        data: {
          boundingBoxes,
          status: 'COMPLETED',
          userId: user.id,
        },
      });

      res.json(task);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update task' });
    }
  }
);

// Create new task
router.post(
  '/',
  [
    body('imageUrl').isURL(),
    body('difficulty').isIn(['EASY', 'MEDIUM', 'HARD']),
    body('reward').isInt({ min: 0 }),
    body('boundingBoxes').isArray(),
  ],
  validateRequest,
  async (req, res) => {
    try {
      const { imageUrl, difficulty, reward, boundingBoxes } = req.body;

      const task = await prisma.task.create({
        data: {
          imageUrl,
          difficulty,
          reward,
          boundingBoxes,
        },
      });

      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create task' });
    }
  }
);

export default router; 