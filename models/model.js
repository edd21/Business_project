'use strict';

//En éste archivo usamos y configuramos todo lo que tenga que ver con la conexión a la base de datos
const mssql = require('mssql'),      //módulo para Sql Server
      conf = require('./db-config'),   // es el archivo .json que se encuentra en ésta carpeta
      dbOptions = {
          host : conf.mssql.host,
          user : conf.mssql.user,
          password : conf.mssql.pass,
          port : conf.mssql.port,
          database : conf.mssql.db
      },
      conn = mssql.createConnection(dbOptions);

conn.connect((err) => {
    return (err) ? console.log(`Èrror al Conectarse a SQL Server: ${err.stack}`) : console.log(`Conexión establecida con SQL Server N°: ${conn.threadId}`);
})

module.exports = conn;
