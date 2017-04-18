'use strict';

//Dependencies for Express and every middlewares initialized
const express = require('express'),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      restFul = require('express-method-override')('_method'), //sólo un guión bajo, lo necesita el front
      //routes = require('./routes/login-route'),
      //favicon = require('serve-favicon')(`${__dirname}/public/*`),
      publicDir = express.static(`${__dirname}/public`),
      viewDir = `${__dirname}/views`,
      port = (process.env.PORT || 8080);

let app = express();

//Settings
app
    .set('views', viewDir)  //pending
    .set('port', port)

    .use(bodyParser.json())
    .use(bodyParser.urlencoded( { extended : false } ))
    .use( publicDir )      //pending
    //.use( favicon )         //pending
    .use( morgan('dev') )
    .use( restFul )        //check the var
    //.use( routes )


    .get('/', (req, resp) => {
            resp.sendFile('./index.html', { root: __dirname });
    });
//export the Settings
module.exports = app;
