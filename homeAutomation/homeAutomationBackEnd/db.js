const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ApplianceDB', (err)=>{
    if(!err){
        console.log('MongoDB connection successful.')
    }
    else{
        console.log('Error in DB Connection:' +JSON.stringify(err));
    }
})


module.exports = mongoose;