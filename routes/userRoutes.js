import express from "express"
<<<<<<< HEAD
import {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/userController.js"

const router = express.Router()

router.get("/", getUsers)
router.get("/:id", getUser)
router.post("/", createUser)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)

export default router
=======
import User from "../models/userModel.js"
import { authenticate } from "../middlewares/authMiddleware.js"
import { authorizeRoles } from "../middlewares/authorizeMiddleware.js"

const router = express.Router()

router.get("/", authenticate, authorizeRoles("admin"), async (req, res) => {
  res.json(await User.find().select("-password"))
})

export default router
>>>>>>> 553a7ec06023f68c57f9df7d3bd03666a488f884
