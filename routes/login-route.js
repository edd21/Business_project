'use strict';

const LoginController = require('../controllers/login-controller'),
      express = require('express'),        // Express aqui se usa como router
      router = express.Router(),
      lc = new LoginController();  //toda la programacion se va al controlador
/*
//Ruta del home
router.get('/', lc.getAll);  //se ejecuta ahora el método .getAll del controller

//manda a llamar a la vista de 'agregar.pug'
router.get('/agregar', tc.addForm);

//aquí se programa la acción para 'agregar' (backend)
router.post('/', tc.save);

//método para programar cada boton de 'editar' para cada registro (frontend), se lanza la vista del formulario para actualizar
router.get('/editar/:id', tc.getOne );

//método para actualizar en la base de datos (backend),
router.put('/actualizar/:id', tc.save);

//método para eliminar registros, es para cada botón de elimnar de cada registro (backend)
router.delete('/eliminar/:id', tc.delete);

//Manejador del error 404
router.use( tc.error404 );
*/
module.exports = router;
