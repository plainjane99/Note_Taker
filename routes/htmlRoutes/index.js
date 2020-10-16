// ========================== dependencies start here ==================================================== //
const router = require('express').Router();
const path = require('path');
// ========================== dependencies end here ==================================================== //

// route that returns 'index.html'
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// route that returns 'notes.html'
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

module.exports = router;