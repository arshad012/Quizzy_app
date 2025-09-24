import { Router } from "express";
import { startAssesment, getAllSubmissions, getSubmissionById, submitAssesment, deleteSubmission } from "../controllers/index.js";
import { authMiddleware } from '../middleware/index.js';

export const submissionsRouter = Router();

submissionsRouter.post("/", authMiddleware, startAssesment);
submissionsRouter.get("/", authMiddleware, getAllSubmissions);

submissionsRouter.post("/:id", authMiddleware, submitAssesment);
submissionsRouter.get("/:id", authMiddleware, getSubmissionById);
submissionsRouter.delete("/:id", authMiddleware, deleteSubmission);