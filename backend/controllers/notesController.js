import Note from '../models/Note.js';
// const Note = require('../models/Note.js');

export async function getAllNotes(_, res) {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });//note.find() gets every single one of the note
        res.status(200).json(notes); //sucessful response. 
    } catch (error) {
        //failed server
        console.error("error in getAllNotes Controller", error);
        res.status(500).json({ message: "internal server error" });
    }
}

export async function createNote(req, res) {
    try {
        const { title, content } = req.body;
        const note = new Note({ title, content });

        const savedNote = await note.save();
        res.status(201).json({ savedNote })
        console.log(title, content);
    } catch (error) {
        console.error("error in create notes Controller", error);
        res.status(500).json({ message: "internal server error" });
    }
    res.status(201).json({ message: "post created successfully" });
}

export async function updateNote(req, res) {
    try {
        const { title, content } = req.body
        //post method getting the ID of the NOTE nad then updating the title and the content. 
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, {
            new: true, //will give a new note with the updated field
        });
        if (!updatedNote) return res.status(404).json({ message: "Note not fund." })
        res.status(201).json({ updatedNote });
    } catch (error) {
        console.error("error in updateNote Controller", error);
        res.status(500).json({ message: "internal server error" });
    }
}

export async function deleteNote(req, res) {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if (!deletedNote) return res.status(404).json({ message: "Note not found" });
        res.status(201).json({ message: "note deleted successfully" });
    } catch (error) {
        console.error("error in delete note Controller", error);
        res.status(500).json({ message: "internal server error" });
    }
}

export async function getNoteById(req, res) {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) return res.status(404).json({ message: "no note found" });
        res.json(note);
    } catch (error) {
        console.error("error in delete get note by id controller", error);
        res.status(500).json({ message: "internal server error" });
    }
}



// module.exports = { createNote, getAllNotes, updateNote, deleteNote, getNoteById };