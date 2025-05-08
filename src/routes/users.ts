import express, { Request, Response, Router } from "express";
import { createUser } from "../services/userService";
import logger from "../lib/logger";

interface CreateUserBody {
  email: string;
}

const router: Router = express.Router();

// Create a new user
router.post(
  "/",
  async (
    req: Request<{}, any, CreateUserBody>,
    res: Response
  ): Promise<void> => {
    try {
      const { email } = req.body;

      if (!email) {
        res.status(400).json({
          error: "Email is required",
        });
        return;
      }

      const user = await createUser(email);
      if (!user) {
        res.status(500).json({ error: "Failed to create user" });
        return;
      }

      res.status(201).json(user);
    } catch (error) {
      logger.error("Error in POST /users:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

export default router;
