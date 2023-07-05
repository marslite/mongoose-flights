const flights = require('../models/flights');
const Flight = require('../models/flights');
const Ticket = require('../models/ticket');


module.exports = {
    index,
    newFlight,
    create,
    show
};

async function index(req,res){
    const flights = await Flight.find({});
    res.render('flights/index', {flights});
}


function newFlight(req,res){
    res.render('flights/new', {errorMsg: 'Failed rendering flights/new'});
}

async function create(req,res){
    // const destinationFromtheDB = await FlightModel.findById(req.params.id);
    // req.body.cast = req.body.cast.trim(); //Removing unnecessary white space
    if(req.body){
        // req.body.cast = req.body.cast.split(/\s*,\s*/);
         //Split cast into an array if it is not an empty string
        try{
            await Flight.create(req.body);
            //Redirect after Creating Updatind Deleting data
            res.redirect('/flights/new');
            console.log("SUCCESS SUCCESS");
            // console.log(destinationFromtheDB);
        } catch (err){
            //Catching any kind of error if the the try block fails
            console.log('ERROR ERROR'); //Display the error to better understand what happenned
            res.render('flights/new',{errorMsg: err.message});
        }
    }
}


async function show(res,req){
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
          // Now you can pass both the flight and tickets in the res.render call
          console.log(flight);
          console.log(tickets);
          
          res.render('flights/show',{flight:flight,tickets:tickets})
          console.log('Mission complete?s')
        });
    });
    
}