import express from "express"
import {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/orderController.js"
import { validate } from "../middlewares/validateMiddleware.js"
import { orderSchema } from "../validators/orderValidator.js"
import { authenticate } from "../middlewares/authMiddleware.js"
import { authorizeRoles } from "../middlewares/authorizeMiddleware.js"

const router = express.Router()

router.get("/", authenticate, authorizeRoles("admin","user"), getOrders)
router.get("/:id", authenticate, authorizeRoles("admin","user"), getOrder)
router.post("/", authenticate, authorizeRoles("admin"), validate(orderSchema), createOrder)
router.put("/:id", authenticate, authorizeRoles("admin"), updateOrder)
router.delete("/:id", authenticate, authorizeRoles("admin"), deleteOrder)

export default router
