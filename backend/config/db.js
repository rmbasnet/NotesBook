const dotenv = require('dotenv');
const { default: mongoose } = require("mongoose")

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("COnncected to DB");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;