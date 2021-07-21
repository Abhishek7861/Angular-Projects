const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var Appliance = require('../models/appliance');


router.get('/',(req, res)=>{
    Appliance.find((err,docs) =>{
        if(!err) { res.send(docs); }
        else{console.log("Error in Retrieving Appliances:" +JSON.stringify(err))};
    })
})

router.get('/:id',(req, res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send("No record with given id: ${req.params.id}");
    Appliance.findById(req.params.id, (err, doc) =>{
        if(!err){ res.send(doc); }
        else{console.log("Error in Retrieving Employees:" +JSON.stringify(err))};
    })
})

router.post('/',(req, res)=>{
    var app = new Appliance({
        applianceName: req.body.applianceName,
        applianceRoom: req.body.applianceRoom,
        applianceState: req.body.applianceState
    })
    app.save((err,docs) => {
        if(!err){ res.send(docs);}
        else{console.log("Error in Appliance Save:"+JSON.stringify(err))};
    })
})

router.put('/:id', (req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send("No record with given id: ${req.params.id}");

    var emp = {
        applianceName: req.body.applianceName,
        applianceRoom: req.body.applianceRoom,
        applianceState: req.body.applianceState
    };

    Appliance.findByIdAndUpdate(req.params.id, { $set:emp },{ new:true }, (err, doc) =>{
        if(!err){ res.send(doc);}
        else{console.log("Error in Employee Update:"+JSON.stringify(err))};
    })
})

router.delete('/:id',(req, res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send("No record with given id: ${req.params.id}");

    Appliance.findByIdAndDelete(req.params.id, (err, doc)=>{
        if(!err){res.send(doc);}
        else{console.log("Error in Appliance Delete: "+JSON.stringify(err))}
    })
})

module.exports = router;