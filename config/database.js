const {default: mongoose} = require('mongoose');
const goose = require('mongoose')
console.log(process.env.DATABASE_URL);
goose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.on('connected', function(){
    console.log(` Succesfully Connected to MongoDB! ${db.name} @ ${db.port}`)
})
