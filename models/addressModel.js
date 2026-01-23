import mongoose from "mongoose"


const addressSchema = new mongoose.Schema(
{
user: {
type: mongoose.Schema.Types.ObjectId,
ref: "User",
required: true
},
fullName: { type: String, required: true },
phone: { type: String, required: true },
addressLine: { type: String, required: true },
city: String,
postalCode: String,
country: { type: String, default: "Bangladesh" },
isDefault: { type: Boolean, default: false }
},
{ timestamps: true }
)


const Address = mongoose.model("Address", addressSchema)
export default Address