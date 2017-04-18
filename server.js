//File for get up Server

const app = require('./app'),   //use file app.js like extern module
      server = app.listen( app.get('port'), () => console.log(`Iniciando API REST MVC Express con MySQL en el puerto ${app.get('port')}`));
