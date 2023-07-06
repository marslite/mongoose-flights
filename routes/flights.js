var express = require('express');
var router = express.Router();

const flightsCtrl = require('../controllers/flights');

//Temporary
// router.get('/', flightsCtrl.indexHome);

/* GET Flights listing. */
router.get('/', flightsCtrl.index);

//GET /flights/new
router.get('/new', flightsCtrl.newFlight);

// POST /flights
router.post('/', flightsCtrl.create);

//Part 3
//In relation to ticket/new

router.get('/:id/tickets/new', flightsCtrl.ticket)



module.exports = router;
