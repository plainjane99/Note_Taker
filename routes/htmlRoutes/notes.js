// ========================== dependencies start here ==================================================== //
const router = require('express').Router();

// ========================== dependencies end here ==================================================== //

// route that returns 'index.html'
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});