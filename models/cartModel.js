import mongoose from "mongoose"

const cartSchema = new mongoose.Schema(
<<<<<<< HEAD
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        items: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                    min: 1,
                    default: 1,
                },
            },
        ],
        totalPrice: {
            type: Number,
            required: true,
            default: 0,
        },
        totalItems: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    { timestamps: true }
)

const Cart = mongoose.model("Cart", cartSchema)

export default Cart
=======
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: Number
      }
    ]
  },
  { timestamps: true }
)

export default mongoose.model("Cart", cartSchema)
>>>>>>> 553a7ec06023f68c57f9df7d3bd03666a488f884
