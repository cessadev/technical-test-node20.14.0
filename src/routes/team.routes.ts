import { Router } from "express";
import {
  createTeamController,
  getAllTeamsController
} from "../controllers/team.controllers";
import authMiddleware from "../middlewares/authMiddlewares";

const router = Router();

router.get("/", authMiddleware, getAllTeamsController);
router.post("/new", authMiddleware, createTeamController);

export default router;