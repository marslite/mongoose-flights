
// const flightSchema = new mongoose.S
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const flightSchema = new Schema({
    airplane: {
        type: String,
        enum: ['American','Soutwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS','DFW','DEN','LAX','SAN'],
        default: 'DEN'
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
    }
},{timestamps: true})


module.exports = mongoose.model('Flight', flightSchema);