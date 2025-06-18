const express = require('express');
const notesRoutes = require('./routes/notesRoutes');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const app = express();

dotenv.config();
const port = process.env.PORT || 5001;

connectDB();
//middleware
app.use(express.json());

app.use('/api/notes', notesRoutes);

app.listen(port, () => {
    console.log('server started on port ', port);
})