const express = require('express');
const config = require('./server/config');

//database
require('./database');

const app = config(express());

//Para heroku
const host = '0.0.0.0';
const port = process.env.PORT;

app.listen(port, host, () => {
    console.log('El servidor esta funcionando');
});