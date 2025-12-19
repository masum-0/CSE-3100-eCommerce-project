import express from "express"
<<<<<<< HEAD
import {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/orderController.js"

const router = express.Router()

router.get("/", getOrders)
router.get("/:id", getOrder)
router.post("/", createOrder)
router.put("/:id", updateOrder)
router.delete("/:id", deleteOrder)

export default router
=======
import Order from "../models/orderModel.js"
import { authenticate } from "../middlewares/authMiddleware.js"

const router = express.Router()

router.post("/", authenticate, async (req, res) => {
  res.json(await Order.create({ ...req.body, user: req.user._id }))
})

export default router
>>>>>>> 553a7ec06023f68c57f9df7d3bd03666a488f884
