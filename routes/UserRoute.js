import express from "express";
import { GetUser } from "../controller/UserController.js";

const router = express.Router();

router.get("/:id", GetUser);

export default router;
