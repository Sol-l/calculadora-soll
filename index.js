const express = require('express');
const { allowedNodeEnvironmentFlags } = require('process');
const app = express()
var calculoRoute = require('./routes/calculoRoute');

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.set("view engine", "ejs");

app.use('/calculo', calculoRoute);

app.listen('3000', function () {
    console.log("Projeto funcionando!");
});