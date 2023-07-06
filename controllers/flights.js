const flights = require('../models/flights');
const Flight = require('../models/flights');
const Ticket = require('../models/ticket');


module.exports = {
    index,
    newFlight,
    create,
    ticket,
    ticketCreate
};

async function index(req,res){
    const flights = await Flight.find({});
    res.render('flights/index', {flights});
}


function newFlight(req,res){
    res.render('flights/new', {errorMsg: 'Failed rendering flights/new'});
}

async function create(req,res){
    console.log(req.body, '<----h');
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



function ticket(req,res){
    res.render('flights/ticket', {id: req.params.id});
}

async function ticketCreate(req,res){
    console.log('Are we getting inside here?')
    try{
        req.body.flight = req.params.id; //Flight ID
        
        // const flightFromThedb = await Flight.findById(req.params.id);
        //Add the  destination to the airplane we found
        console.log(req.body, "<--- This is req.body")
        const test = await Ticket.create(req.body)
        console.log(test, "This is req.body when passed to Ticket.create");
        console.log('helloo');
        // res.redirect(`flights/${req.params.id}`);

        // const flight = red.params.id;
        // const ticket = req.body;
        console.log(req.body, "Check here for Body");
        console.log(req.params.id, 'Double checking');
        console.log(req.body, "Check here for Body");
        //Continue from here
        res.redirect(`/flights/${req.params.id}`);

        // res.render(`/flights/${req.params.id}/`, {tickets: req.body});

        
    }catch(err){
        res.send(err);
    }

}




