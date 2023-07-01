

// const flightSchema = new mongoose.S
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: [ 'AUS','DFW','DEN','LAX','SAN'],
    },
    arrival: {
        type: Date
    }


})


const flightSchema = new Schema({
    airplane: {
        type: String,
        enum: ['American','Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS','DFW','DEN','LAX','SAN'],
        // default: 'DEN'
    },
    flightNo:{
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },

    departs:{
        type: Date,
        // default: 
    },
    destinations:[destinationSchema]
},{timestamps: true})




module.exports = mongoose.model('Flight', flightSchema);