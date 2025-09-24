import { Router } from 'express';
import { getAllTemplates, deleteTemplateById, getTemplateById, createTemplate } from "../controllers/index.js";
import { authMiddleware } from '../middleware/index.js';

export const templateRouter = Router();

templateRouter.get("/", authMiddleware, getAllTemplates)
templateRouter.post("/create", authMiddleware, createTemplate)
templateRouter.get("/:id", authMiddleware, getTemplateById)
templateRouter.delete("/:id", authMiddleware, deleteTemplateById)
