import express from "express";
import {
  GetUser,
  UnFollowUser,
  deleteUser,
  followUser,
  updateUser,
} from "../controller/UserController.js";

const router = express.Router();

router.get("/:id", GetUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.put("/:id/follow", followUser);
router.put("/:id/unfollow", UnFollowUser);

export default router;
