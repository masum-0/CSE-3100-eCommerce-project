import mongoose from "mongoose"

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    products: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: Number
      }
    ],
    totalPrice: Number,
    status: {
      type: String,
      enum: ["Pending", "Shipped", "Delivered"],
      default: "Pending"
    }
  },
  { timestamps: true }
)

<<<<<<< HEAD
const Order = mongoose.model("Order", orderSchema)

export default Order
=======
export default mongoose.model("Order", orderSchema)
>>>>>>> 553a7ec06023f68c57f9df7d3bd03666a488f884
