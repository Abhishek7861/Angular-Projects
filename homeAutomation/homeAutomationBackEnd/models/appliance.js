const mongoose = require('mongoose');

var Appliance = mongoose.model('Appliance',{
    applianceName: {type: String},
    applianceRoom: {type:String},
    applianceState: {type:Boolean}
})

module.exports = Appliance;