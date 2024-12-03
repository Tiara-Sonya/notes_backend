const express = require('express');
const {
    createNote,
    getAllNotes,
    getNoteById,
    updateNote,
    deleteNote,
} = require('../controllers/notesController');

const router = express.Router();

// Define routes
router.post('/notes', createNote);
router.get('/notes', getAllNotes);
router.get('/notes/:id', getNoteById);
router.put('/notes/:id', updateNote);
router.delete('/notes/:id', deleteNote);

module.exports = router;
