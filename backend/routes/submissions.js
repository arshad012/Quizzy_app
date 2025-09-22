import { Router } from "express";
import { startAssesment, getAllSubmissions, getSubmissionById, submitAssesment, deleteSubmission } from "../controllers/index.js";

export const submissionsRouter = Router();

submissionsRouter.post("/", startAssesment);
submissionsRouter.get("/", getAllSubmissions);

submissionsRouter.post("/:id", submitAssesment);
submissionsRouter.get("/:id", getSubmissionById);
submissionsRouter.delete("/:id", deleteSubmission);