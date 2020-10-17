// ========================== dependencies start here ==================================================== //
const router = require('express').Router();

// takes in data from db folder
const dbNotes = require('../../db/db.json')
// ========================== dependencies end here ==================================================== //

router.get('/notes', (req, res) => {
    res.json(dbNotes);
});

router.post('/notes', (req, res) => {
    const newNote = req.body;
    dbNotes.push(newNote);
    res.json(dbNotes);
})

module.exports = router;
