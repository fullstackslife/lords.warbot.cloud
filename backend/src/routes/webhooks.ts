import express from 'express';
import { PrismaClient } from '@prisma/client';
import { body } from 'express-validator';
import { validateRequest } from '../middleware/validateRequest';

const router = express.Router();
const prisma = new PrismaClient();

// Webhook for training queue updates
router.post(
  '/training',
  [
    body('taskId').isUUID(),
    body('accuracy').isFloat({ min: 0, max: 100 }),
    body('modelVersion').isString(),
  ],
  validateRequest,
  async (req, res) => {
    try {
      const { taskId, accuracy, modelVersion } = req.body;

      // Update task with model version and accuracy
      const task = await prisma.task.update({
        where: { id: taskId },
        data: {
          status: 'VERIFIED',
          metadata: {
            modelVersion,
            accuracy,
            verifiedAt: new Date(),
          },
        },
      });

      // Trigger token payout
      if (task.userId) {
        const user = await prisma.user.findUnique({
          where: { id: task.userId },
        });

        if (user) {
          // TODO: Implement token payout logic here
          // This would interact with the smart contract
          console.log(`Token payout triggered for user ${user.walletAddress}`);
        }
      }

      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Failed to process training update' });
    }
  }
);

// Webhook for model deployment
router.post(
  '/deploy',
  [
    body('modelVersion').isString(),
    body('accuracy').isFloat({ min: 0, max: 100 }),
    body('tasksUsed').isArray(),
  ],
  validateRequest,
  async (req, res) => {
    try {
      const { modelVersion, accuracy, tasksUsed } = req.body;

      // Update tasks used in training
      await prisma.task.updateMany({
        where: {
          id: {
            in: tasksUsed,
          },
        },
        data: {
          metadata: {
            usedInTraining: true,
            modelVersion,
            trainingAccuracy: accuracy,
          },
        },
      });

      // TODO: Implement model deployment logic here
      console.log(`Model version ${modelVersion} deployed with accuracy ${accuracy}%`);

      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Failed to process model deployment' });
    }
  }
);

export default router; 