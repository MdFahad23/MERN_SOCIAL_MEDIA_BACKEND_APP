import express from "express";
import { RegisterUser } from "../controller/AuthController.js";

const router = express.Router();

router.post("/register", RegisterUser);

export default router;
