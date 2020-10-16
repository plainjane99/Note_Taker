// ========================== dependencies start here ==================================================== //
const router = require('express').Router();

// employ Router by using the module exported from notes.js
const notesRoutes = require('../apiRoutes/notesRoutes');

// ========================== dependencies end here ==================================================== //


router.use(notesRoutes);

module.exports = router;