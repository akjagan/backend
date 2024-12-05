import express from "express";
import { signIn, login } from "../controllers/authController";

const router = express.Router();

router.post("/signin", signIn);
router.post("/login", login);

export default router;
