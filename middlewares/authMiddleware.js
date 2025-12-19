import jwt from "jsonwebtoken"
import User from "../models/userModel.js"

<<<<<<< HEAD
export const authenticate=async(req ,res ,next)=>{
    try{
        const token=req.cookies?.token || req.headers.authorization?.split(' ')[1]

        if(!token){
            return res.status(401).json({
                success:false,
                message:"Access denied. No token provided."
            })
        }

        const decoded=jwt.verify(token,process.env.JWT_SECRET)

        const user=await User.findById(decoded.userId).select('-password')

        if(!user){
            return res.status(401).json({
                success:false,
                message:"Invalid token. User not found"
            })
        }

        req.user=user
        next()
    }catch(error){
        return res.status(401).json({
            success:false,
            message:"Invalid or expired token."
        })
    }
}
=======
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
>>>>>>> 553a7ec06023f68c57f9df7d3bd03666a488f884
