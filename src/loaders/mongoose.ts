import mongoose from "mongoose";
import { MONGO_STRING } from "../configs";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_STRING)
        console.log("MongoDB Connected...");
    } catch (error) {
        console.log(error);
    }

}

export default connectDB;