var express = require('express');
var router = express.Router();

const adoptController = require('./adopt/adoptController');
const adoptlistController = require('./adopt/adoptlistController');

/* adoptList. */
router.get('/getAdoptList', adoptlistController.getAdoptList);

/* adopt */
router.post('/adopt', adoptController.adopt);
router.post('/cancel', adoptController.cancel);

module.exports = router;