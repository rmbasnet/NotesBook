import express from "express";
import {
    createNote,
    deleteNote,
    getAllNotes,
    getNoteById,
    updateNote,
} from "../controllers/notesController.js";

const router = express.Router();

router.get('/', getAllNotes);

router.get('/:id', getNoteById);

router.post('/', createNote);

//updates the list with id
router.put('/:id', updateNote)

router.delete('/:id', deleteNote)

export default router;