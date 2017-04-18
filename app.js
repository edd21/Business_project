'use strict';

//Dependencies for Express and every middlewares initialized
//aqui se queda la configuración para levantar Express y todos los middlewares
const express = require('express'),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      restFul = require('express-method-override')('_method'), //sólo un guión bajo, lo necesita el front
      routes = require('./routes/login-router'),
      favicon = require('serve-favicon')(`${__dirname}/public/favicon.png`),
      publicDir = express.static(`${__dirname}/public`),
      viewDir = `${__dirname}/views`,
      port = (process.env.PORT || 3000);
