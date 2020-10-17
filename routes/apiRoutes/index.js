// ========================== dependencies start here ==================================================== //
const router = require('express').Router();

const dataRoutes = require('../apiRoutes/dataRoutes');
// ========================== dependencies end here ==================================================== //

router.use(dataRoutes);

module.exports = router;