// file: controllers/userController.js
import User from "../models/userModel.js"

// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("-password") // exclude password
    res.status(200).json({
      success: true,
      count: users.length,
      data: users
    })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}
