const Flight = require('../models/flights');

module.exports = {
    index,
    newFlight,
    create
};

async function index(req,res){
    const flights = await Flight.find({});
    res.render('flights/index', {flights});
}


function newFlight(req,res){
    res.render('flights/new', {errorMsg: 'Failed rendering flights/new'});
}

async function create(req,res){
    // req.body.cast = req.body.cast.trim(); //Removing unnecessary white space
    if(req.body){
        // req.body.cast = req.body.cast.split(/\s*,\s*/);
         //Split cast into an array if it is not an empty string
        try{
            await Flight.create(req.body);
            //Redirect after Creating Updatind Deleting data
            res.redirect('/flights/new');
        } catch (err){
            //Catching any kind of error if the the try block fails
            console.log(err); //Display the error to better understand what happenned
            res.render('flights/new',{errorMsg: err.message});
        }
    }
}