import mongoose from "mongoose"

const loginAttemptSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null
    },
    identifier: {
      type: String,
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
      type: String
    }
  },
  { timestamps: true }
)

const LoginAttempt = mongoose.model("LoginAttempt", loginAttemptSchema)
export default LoginAttempt