import express from "express"
<<<<<<< HEAD
import {
    getCarts,
    getCart,
    createCart,
    updateCart,
    deleteCart
} from "../controllers/cartController.js"

const router = express.Router()

router.get("/", getCarts)
router.get("/:id", getCart)
router.post("/", createCart)
router.put("/:id", updateCart)
router.delete("/:id", deleteCart)

export default router
=======
import Cart from "../models/cartModel.js"
import { authenticate } from "../middlewares/authMiddleware.js"

const router = express.Router()

router.post("/", authenticate, async (req, res) => {
  res.json(await Cart.create({ ...req.body, user: req.user._id }))
})

export default router
>>>>>>> 553a7ec06023f68c57f9df7d3bd03666a488f884
