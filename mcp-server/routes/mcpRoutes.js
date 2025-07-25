import express from "express";
import { processCommand } from "../controllers/mcpController.js";

const router = express.Router();

router.post("/process", processCommand);

export default router;
