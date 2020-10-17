// ========================== dependencies start here ==================================================== //
const router = require('express').Router();
const fs = require('fs');
const path = require('path');

// npm package to input unique id
const { v4: uuidv4 } = require('uuid');

// takes in data from db folder
const dbNotes = require('../../db/db.json');
// ========================== dependencies end here ==================================================== //

// route to get notes from database
router.get('/notes', (req, res) => {
    res.json(dbNotes);
});

// route to display notes entered by user and write to database
router.post('/notes', (req, res) => {

    // saves input to newNote const
    const newNote = req.body;

    // generates a unique id through uuid package
    newNote.id = uuidv4();

    // pushes input into existing array
    dbNotes.push(newNote);

    // write input into database
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(dbNotes, null, 2)
    );

    // returns array to display task titles to left hand column
    res.json(dbNotes);
});

router.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id;

    for (let i = 0; i < dbNotes.length;) {
        if (noteId != dbNotes[i].id) {
            i++;
        }
        else {
            dbNotes.splice(i, 1);

            // rewrite array to database
            fs.writeFileSync(
                path.join(__dirname, '../../db/db.json'),
                JSON.stringify(dbNotes, null, 2)
            );

            // return array to display task titles minus deleted task
            res.json(dbNotes);

        }
    }

})

module.exports = router;