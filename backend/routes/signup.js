import { Router } from "express";
import { signupUser } from "../controllers/index.js";

export const signupRouter = Router();

signupRouter.post('/', signupUser);