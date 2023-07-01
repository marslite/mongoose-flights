const FlightModel = require('../models/flights');

module.exports = {show,create}

async function show(req,res){

    try{

        const destinationFromtheDB = await FlightModel.findById(req.params.id);
        console.log('CHECK HERE', req.params.id);
        res.render('flights/show', {flights:destinationFromtheDB});
    }catch(err){
        res.send(err)
    }
}



async function create(req,res){

    try{
        const flightFromThedb = await FlightModel.findById(req.params.id);
        //Add the  destination to the airplane we found
        flightFromThedb.destinations.push(req.body);
        //After completing this operation and changing the document
        //MongoDB has to be updated it, we perform save()
        await flightFromThedb.save();
        //Checking with a response to the client
        console.log('LOL');
        res.redirect(`/flights/${req.params.id}`)
    
        //We add the destinations to the Airplane we found from the db    

    }catch(err){

        res.send(err)

    }


}

