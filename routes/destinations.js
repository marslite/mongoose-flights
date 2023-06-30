const express = require('express');
const router = express.Router();

const destinationsCtrl = require('../controllers/destinations')

router.get('/flights/:id', destinationsCtrl.show);


module.exports = router;