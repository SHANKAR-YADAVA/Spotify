import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./route.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const connectDb = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI, {
            dbName: "Spotify",
        });
        console.log("Mongo Db Connected");
    }
    catch (error) {
        console.log(error);
    }
};
app.use("/api/v1", userRoutes);
app.get("/", (req, res) => {
    res.send("Server is working");
});
app.use;
const port = process.env.PORT || 5000;
app.listen(5000, () => {
    console.log(`Server is running on port ${port}`);
    connectDb();
});
