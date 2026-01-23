import mongoose from "mongoose"

const loginAttemptSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null
    },
    identifier: {
      type: String, // email or username
      required: true
    },
    ipAddress: {
      type: String,
      required: true
    },
    userAgent: {
      type: String
    },
    success: {
      type: Boolean,
      required: true
    },
    reason: {
      type: String // wrong password, user not found, blocked, etc
    }
  },
  { timestamps: true }
)

const LoginAttempt = mongoose.model("LoginAttempt", loginAttemptSchema)
export default LoginAttempt