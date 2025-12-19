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

const Order = mongoose.model("Order", orderSchema)

export default Order
