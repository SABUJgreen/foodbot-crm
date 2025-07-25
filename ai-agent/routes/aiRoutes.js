import express from "express";
import { parseAndCreateLead } from "../controllers/aiController.js";

const router = express.Router();

router.post("/parse-and-create", parseAndCreateLead);

export default router;
