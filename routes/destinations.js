const express = require('express');
const router = express.Router();

const destinationsCtrl = require('../controllers/destinations')

router.get('/flights/:id', destinationsCtrl.show);

//just added
router.post('/flights/:id/destinations', destinationsCtrl.create);




module.exports = router;