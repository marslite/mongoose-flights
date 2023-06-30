const FlightModel = require('../models/flights');

module.exports = {show}

async function show(req,res){

    try{

        const destinationFromtheDB = await FlightModel.findById(req.params.id);
        res.render('flights/show', {flights:destinationFromtheDB});
    }catch(err){
        res.send(err)
    }
}

