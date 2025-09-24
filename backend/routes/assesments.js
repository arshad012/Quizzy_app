import { Router } from "express";
import {
    createAssesmentFromUI,
    createAssessment,
    deleteAssessmentById,
    getAllAssessments,
    getAssessmentById,
} from "../controllers/index.js";
import { authMiddleware } from '../middleware/index.js';

export const assessmentsRouter = Router();

assessmentsRouter.get("/", authMiddleware, getAllAssessments);
assessmentsRouter.post("/createAssesment", authMiddleware, createAssessment);
assessmentsRouter.post("/ai", authMiddleware, createAssesmentFromUI);
assessmentsRouter.get("/:id", authMiddleware, getAssessmentById);
assessmentsRouter.delete("/:id", authMiddleware, deleteAssessmentById);