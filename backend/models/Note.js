import mongoose from "mongoose";

//create a schema
//model based off of that schema
//for the database

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
    },
    { timestamps: true } //created at Updated At
);

const Note = mongoose.model("Note", noteSchema);
export default Note;