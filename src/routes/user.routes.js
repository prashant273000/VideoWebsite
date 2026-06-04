import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

//STUDY ABOUT ROUTER

const router = Router()

router.route("/register").post(registerUser)


export default router