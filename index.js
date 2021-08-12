const express = require('express');
const { allowedNodeEnvironmentFlags } = require('process');
const app = express()
var calculoRoute = require('./routes/calculoRoute');


app.use('/calculo', calculoRoute);


app.get('/calculadora', (req, res) => {
    res.send("hello word");
});

app.listen('3000', function () {
    console.log("Projeto funcionando!");
});