const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const {mongoose} = require('./db');
var applianceController = require("./controller/applianceController");

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(3000,()=>console.log("Server started at port: 3000"))

app.use('/appliance',applianceController);