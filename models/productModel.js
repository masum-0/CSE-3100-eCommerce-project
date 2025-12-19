import mongoose from "mongoose"

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 }
  },
  { timestamps: true }
)

<<<<<<< HEAD
const Product = mongoose.model("Product", productSchema)

export default Product
=======
export default mongoose.model("Product", productSchema)
>>>>>>> 553a7ec06023f68c57f9df7d3bd03666a488f884
