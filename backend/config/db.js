// const dotenv = require('dotenv');
import dotenv from 'dotenv';
import mongoose from "mongoose";

dotenv.config();

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("COnncected to DB");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

// module.exports = connectDB;