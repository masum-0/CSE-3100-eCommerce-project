import express from "express"
import {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/userController.js"
import { authenticate } from "../middlewares/authMiddleware.js"
import { authorizeRoles } from "../middlewares/authorizeMiddleware.js"

const router = express.Router()

router.get("/", authenticate, authorizeRoles("admin","user"), getUsers)
router.get("/:id", authenticate, authorizeRoles("admin","user"), getUser)
router.post("/", authenticate, authorizeRoles("admin"), createUser)
router.put("/:id", authenticate, authorizeRoles("admin"), updateUser)
router.delete("/:id", authenticate, authorizeRoles("admin"), deleteUser)

export default router
