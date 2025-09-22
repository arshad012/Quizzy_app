import { Router } from "express";
import { loginUser } from "../controllers/index.js";

export const loginRouter = Router();

loginRouter.post('/', loginUser);