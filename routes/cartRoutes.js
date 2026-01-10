import express from "express"
import {
    getCarts,
    getCart,
    createCart,
    updateCart,
    deleteCart
} from "../controllers/cartController.js"
import { validate } from "../middlewares/validateMiddleware.js"
import { cartSchema } from "../validators/cartValidator.js"
import { authenticate } from "../middlewares/authMiddleware.js"
import { authorizeRoles } from "../middlewares/authorizeMiddleware.js"

const router = express.Router()

router.get("/", authenticate, authorizeRoles("admin","user"), getCarts)
router.get("/:id", authenticate, authorizeRoles("admin","user"), getCart)
router.post("/", authenticate, authorizeRoles("admin"), validate(cartSchema), createCart)
router.put("/:id", authenticate, authorizeRoles("admin"), validate(cartSchema), updateCart)
router.delete("/:id", authenticate, authorizeRoles("admin"), deleteCart)

export default router