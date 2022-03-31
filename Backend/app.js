//import expresse
const express = require('express');
//creat body-parser
const app = express();
//cost axios module
//const axios = require("axios");
const mongoose = require("mongoose");
//import mongoose
mongoose.connect("mongodb://localhost:27017/cakeDB");
//import body-parser

const bodyParser = require('body-parser');
//const player = require('./models/player');

//config body parsser
app.use(bodyParser.urlencoded({ extended: true }));
//
app.use(bodyParser.json());

// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });*/
//  import router
/*let sales = [
    {  id:1,nomProduit: "Messi", quantite: 35, prix: 10 },
   
  ];*/

const userRoutes=require('../backend/routes/user-routes');
const sucreRoutes = require('../backend/routes/sucre-router');
const saleRoutes = require('../backend/routes/saler-routes');
app.use("/sales", saleRoutes);
app.use("/users",userRoutes);
app.use("/sucres",sucreRoutes);
module.exports = app;