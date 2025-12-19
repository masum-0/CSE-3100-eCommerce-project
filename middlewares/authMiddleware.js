import jwt from "jsonwebtoken"
import User from "../models/userModel.js"

export const authenticate = async (req, res, next) => {
  try {
    const token =
      req.cookies.token ||
      req.headers.authorization?.split(" ")[1]

    if (!token)
      return res.status(401).json({ message: "Unauthorized" })

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findById(decoded.userId).select("-password")
    next()
  } catch {
    res.status(401).json({ message: "Invalid token" })
  }
}
