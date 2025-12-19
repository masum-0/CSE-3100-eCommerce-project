<<<<<<< HEAD
=======
// file: models/userModel.js
>>>>>>> 553a7ec06023f68c57f9df7d3bd03666a488f884
import mongoose from "mongoose"
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema(
<<<<<<< HEAD
    {
        username: { type: String, required: true,unique:true,trim:true,minlength:3 },
        email: { type: String, required: true, unique: true,lowercase:true,trim:true },
        age: { type: Number, required: true },
        role:{type:String,enum:['user','admin'],default:'user'},
        password:{type:String,required:true,minlength:5}
=======
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      trim: true,
      minlength: [3, "Username must be at least 3 characters"]
>>>>>>> 553a7ec06023f68c57f9df7d3bd03666a488f884
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/.+\@.+\..+/, "Please fill a valid email address"]
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [5, "Password must be at least 5 characters"]
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user"
    }
  },
  { timestamps: true }
)

<<<<<<< HEAD
userSchema.pre('save',async function () {
    if(!this.isModified("password")) return
    const salt=await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password,salt)
})

userSchema.methods.comparePassword=async function (givenPassword) {
    return await bcrypt.compare(givenPassword,this.password)
}

const User = mongoose.model("User", userSchema)
=======
// Hash password before save
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})
>>>>>>> 553a7ec06023f68c57f9df7d3bd03666a488f884

// Compare password method
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password)
}

const User = mongoose.model("User", userSchema)
export default User
