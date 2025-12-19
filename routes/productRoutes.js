import express from "express"
import Product from "../models/productModel.js"
import { authenticate } from "../middlewares/authMiddleware.js"
import { authorizeRoles } from "../middlewares/authorizeMiddleware.js"

const router = express.Router()

router.get("/", async (req, res) => {
  res.json(await Product.find())
})

router.post("/", authenticate, authorizeRoles("admin"), async (req, res) => {
  res.json(await Product.create(req.body))
})

export default router
