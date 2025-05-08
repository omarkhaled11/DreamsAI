import express, { Request, Response, Router } from "express";
import { createDream, getDreamsByUser } from "../services/dreamService";
import logger from "../lib/logger";

interface CreateDreamBody {
  content: string;
  userId: string;
}

const router: Router = express.Router();

// Create a new dream
router.post(
  "/",
  async (
    req: Request<{}, any, CreateDreamBody>,
    res: Response
  ): Promise<void> => {
    try {
      const { content, userId } = req.body;

      if (!content || !userId) {
        res.status(400).json({
          error: "Content and userId are required",
        });
        return;
      }

      const dream = await createDream(content, userId);
      if (!dream) {
        res.status(500).json({ error: "Failed to create dream" });
        return;
      }

      res.status(201).json(dream);
    } catch (error) {
      logger.error("Error in POST /dreams:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

// Get dreams by user
router.get(
  "/user/:userId",
  async (req: Request<{ userId: string }>, res: Response): Promise<void> => {
    try {
      const { userId } = req.params;
      const dreams = await getDreamsByUser(userId);
      res.json(dreams);
    } catch (error) {
      logger.error("Error in GET /dreams/user/:userId:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

export default router;
