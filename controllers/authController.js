// file: controllers/authController.js
import User from "../models/userModel.js"
import { generateToken } from "../utils/generateToken.js"

// Register
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body

    // Validation
    if (!username || !email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" })
    }

    // Check if user exists
    const exists = await User.findOne({ $or: [{ email }, { username }] })
    if (exists) {
      return res.status(409).json({
        success: false,
        message: exists.email === email ? "Email already registered" : "Username already taken"
      })
    }

    // Create user
    const user = await User.create({ username, email, password })
    const token = generateToken(user._id)

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000
    })

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: { user: { id: user._id, username: user.username, email: user.email, role: user.role }, token }
    })
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map(val => val.message)
      return res.status(400).json({ success: false, message: messages })
    }
    res.status(500).json({ success: false, message: "Server error", error: error.message })
  }
}

// Login
export const login = async (req, res) => {
  try {
    const { identifier, password } = req.body
    if (!identifier || !password) {
      return res.status(400).json({ success: false, message: "Identifier and password required" })
    }

    const user = await User.findOne({ $or: [{ email: identifier.toLowerCase() }, { username: identifier }] })
    if (!user) return res.status(401).json({ success: false, message: "Invalid credentials" })

    const isPasswordValid = await user.comparePassword(password)
    if (!isPasswordValid) return res.status(401).json({ success: false, message: "Invalid credentials" })

    const token = generateToken(user._id)
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000
    })

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: { user: { id: user._id, username: user.username, email: user.email, role: user.role }, token }
    })
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message })
  }
}

// Get Profile
export const getProfile = (req, res) => {
  res.status(200).json({ success: true, data: { user: req.user } })
}

// Logout
export const logout = (req, res) => {
  res.clearCookie("token")
  res.status(200).json({ success: true, message: "Logged out successfully" })
}
