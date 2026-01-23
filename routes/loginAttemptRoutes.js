import express from "express"
import { authenticate } from "../middlewares/authMiddleware.js"
import { authorizeRoles } from "../middlewares/authorizeMiddleware.js"
import { getLoginAttempts } from "../controllers/loginAttemptController.js"

const router = express.Router()

router.get("/", authenticate, authorizeRoles("admin"), getLoginAttempts)

export default router