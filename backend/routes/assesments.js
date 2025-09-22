import { Router } from "express";
import {
    createAssesmentFromUI,
    createAssessment,
    deleteAssessmentById,
    getAllAssessments,
    getAssessmentById,
} from "../controllers/index.js";

export const assessmentsRouter = Router();

assessmentsRouter.get("/", getAllAssessments);
assessmentsRouter.post("/createAssesment", createAssessment);
assessmentsRouter.post("/ai", createAssesmentFromUI);
assessmentsRouter.get("/:id", getAssessmentById);
assessmentsRouter.delete("/:id", deleteAssessmentById);