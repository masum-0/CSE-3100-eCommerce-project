<<<<<<< HEAD
=======
// file: controllers/userController.js
>>>>>>> 553a7ec06023f68c57f9df7d3bd03666a488f884
import User from "../models/userModel.js"

// Get all users
export const getUsers = async (req, res) => {
  try {
<<<<<<< HEAD
    const users = await User.find({})
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findByIdAndUpdate(id, req.body, { new: true })

    if (!user) 
      return res.status(404).json({ message: "User not found" })

    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findByIdAndDelete(id)

    if (!user)
      return res.status(404).json({ message: "User not found" })

    res.status(200).json({ message: "User deleted successfully" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
=======
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
>>>>>>> 553a7ec06023f68c57f9df7d3bd03666a488f884
