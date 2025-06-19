import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import path from "path";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import { connect } from "mongoose";

dotenv.config();
const app = express();
const port = process.env.PORT || 5001;

connectDB();

//middleware
//most useful stuff would be the authentication check
app.use(cors({
    origin: "http://localhost:5173",
}));
app.use(express.json());//will parse the json bodies
app.use(rateLimiter); //checks for rate limiting

app.use((req, res, next) => {
    console.log(`new request ${req.method} and req URL is ${req.url}`);
    next();
})

app.use('/api/notes', notesRoutes);

connectDB().then(() => {
    //connect to the database first then connect to the port. 
    app.listen(port, () => {
        console.log('server started on port ', port);
    })
})
