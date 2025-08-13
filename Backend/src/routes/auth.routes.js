import express from "express";
import authController from "../controller/auth.controller.js";

const router = express.Router();

router.post("/signup", authController.signup);
// router.post("/login", login);
router.post("/logout", authController.logout);

// router.put("/update-profile", protectRoute, updateProfile);

// router.get("/check", protectRoute, checkAuth);

export default router;