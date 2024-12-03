const db = require('../config/database');

// Create a new note
const createNote = (req, res) => {
    const { title, datetime, note } = req.body;
    const sql = 'INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?)';
    db.query(sql, [title, datetime, note], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Note created', id: result.insertId });
    });
};

// Get all notes
const getAllNotes = (req, res) => {
    const sql = 'SELECT * FROM notes';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// Get a single note by ID
const getNoteById = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM notes WHERE id = ?';
    db.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: 'Note not found' });
        res.json(results[0]);
    });
};

// Update a note
const updateNote = (req, res) => {
    const { id } = req.params;
    const { title, datetime, note } = req.body;
    const sql = 'UPDATE notes SET title = ?, datetime = ?, note = ? WHERE id = ?';
    db.query(sql, [title, datetime, note, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Note not found' });
        res.json({ message: 'Note updated' });
    });
};

// Delete a note
const deleteNote = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM notes WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Note not found' });
        res.json({ message: 'Note deleted' });
    });
};

// Export all functions
module.exports = {
    createNote,
    getAllNotes,
    getNoteById,
    updateNote,
    deleteNote,
};
