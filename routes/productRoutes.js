import express from "express"
<<<<<<< HEAD
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js"

const router = express.Router()

router.get("/", getProducts)
router.get("/:id", getProduct)
router.post("/", createProduct)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)

export default router
=======
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
>>>>>>> 553a7ec06023f68c57f9df7d3bd03666a488f884
