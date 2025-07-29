import express from "express";
import { signup } from "../controllers/auth.js";

const router = express.Router();

router.get("/signup", signup);

export default router;
