<<<<<<< HEAD
import express from 'express'
import { register,login,getProfile,logout } from "../controllers/authController.js"
import { authenticate } from "../middlewares/authMiddleware.js"

const router=express.Router()

router.post("/register",register)
router.post("/login",login)
router.get("/profile",authenticate,getProfile)
router.post("/logout",authenticate,logout)

export default router
=======
import express from "express"
import {
  register,
  login,
  getProfile,
  logout
} from "../controllers/authController.js"
import { authenticate } from "../middlewares/authMiddleware.js"

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.get("/profile", authenticate, getProfile)
router.post("/logout", authenticate, logout)

export default router
>>>>>>> 553a7ec06023f68c57f9df7d3bd03666a488f884
