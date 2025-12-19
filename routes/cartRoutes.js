import express from "express"
import Cart from "../models/cartModel.js"
import { authenticate } from "../middlewares/authMiddleware.js"

const router = express.Router()

router.post("/", authenticate, async (req, res) => {
  res.json(await Cart.create({ ...req.body, user: req.user._id }))
})

export default router
