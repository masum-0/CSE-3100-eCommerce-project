import express from "express"
import User from "../models/userModel.js"
import { authenticate } from "../middlewares/authMiddleware.js"
import { authorizeRoles } from "../middlewares/authorizeMiddleware.js"

const router = express.Router()

router.get("/", authenticate, authorizeRoles("admin"), async (req, res) => {
  res.json(await User.find().select("-password"))
})

export default router
