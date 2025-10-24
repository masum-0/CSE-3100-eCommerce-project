import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config()
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/users", router);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);


app.get("/",(req,res)=>{
    res.send("Backend is working");
});

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Mongoose is connected");
}).catch(errro=>{
    console.log(errro)
});


app.listen(8000,()=>{
    console.log("Runnning in http://localhost:8000");
});