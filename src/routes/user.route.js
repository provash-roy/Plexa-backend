import express from "express";
const router = express.Router();

import { registerUser } from "../controllers/user.controller.js";

router
  .route("/register")
  .post(registerUser)
  .get((req, res) => {
    res.send("User registration endpoint");
  });

export default router;
