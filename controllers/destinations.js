const Flight = require('../models/flights');
const Ticket = require('../models/ticket')
module.exports = {show,create}

async function show(req,res){


     const flight = await Flight.findById(req.params.id) 
     const tickets =  await  Ticket.find({flight: flight._id})
          // Now you can pass both the flight and tickets in the res.render call
          console.log(flight);
          console.log(tickets);
          
          res.render('flights/show',{flight,tickets})
          console.log('Mission complete?s')
        };
    
    

    // try{

    //     const destinationFromtheDB = await FlightModel.findById(req.params.id);
    //     console.log('CHECK HERE', req.params.id);
    //     res.render('flights/show', {flights:destinationFromtheDB});
    // }catch(err){
    //     res.send(err)
    // }




async function create(req,res){

    try{
        const flightFromThedb = await Flight.findById(req.params.id);
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

