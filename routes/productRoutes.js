import express from "express"
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js"
import { productSchema } from "../validators/productValidator.js"
import { validate } from "../middlewares/validateMiddleware.js"
import { authenticate } from "../middlewares/authMiddleware.js"
import { authorizeRoles } from "../middlewares/authorizeMiddleware.js"

const router = express.Router()

router.get("/", authenticate, authorizeRoles("admin","user"), getProducts)
router.get("/:id", authenticate, authorizeRoles("admin","user"), getProduct)
router.post("/", authenticate, authorizeRoles("admin"), validate(productSchema), createProduct)
router.put("/:id", authenticate, authorizeRoles("admin"), validate(productSchema.partial()), updateProduct)
router.delete("/:id", authenticate, authorizeRoles("admin"), deleteProduct)

export default router
