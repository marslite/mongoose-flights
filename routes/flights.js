var express = require('express');
var router = express.Router();

const flightsCtrl = require('../controllers/flights');

/* GET Flights listing. */
router.get('/', flightsCtrl.index);

//GET /flights/new
router.get('/new', flightsCtrl.newFlight);

// POST /flights
router.post('/', flightsCtrl.create);



module.exports = router;
