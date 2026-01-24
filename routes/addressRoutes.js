import express from "express"
import { createAddress, getAddresses } from "../controllers/addressController.js"
import { authenticate } from "../middlewares/authMiddleware.js"
import { validate } from "../middlewares/validateMiddleware.js"
import { addressSchema } from "../validators/addressValidator.js"


const router = express.Router()


router.post("/", authenticate, createAddress)
router.get("/", authenticate, getAddresses)


export default router