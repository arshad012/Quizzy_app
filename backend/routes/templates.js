import { Router } from 'express';

import { getAllTemplates, deleteTemplateById, getTemplateById, createTemplate } from "../controllers/index.js";

export const templateRouter = Router();

templateRouter.get("/", getAllTemplates)
templateRouter.post("/create", createTemplate)
templateRouter.get("/:id", getTemplateById)
templateRouter.delete("/:id", deleteTemplateById)
