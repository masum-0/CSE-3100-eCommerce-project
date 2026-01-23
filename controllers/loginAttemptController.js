import LoginAttempt from "../models/loginAttemptModel.js"

export const getLoginAttempts = async (req, res) => {
  try {
    const attempts = await LoginAttempt.find()
      .populate("user", "username email")
      .sort({ createdAt: -1 })

    res.status(200).json(attempts)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}