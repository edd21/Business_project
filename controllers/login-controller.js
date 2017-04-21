//Archivo que consume todas las peticiones de team-model.js
'use strict';

const LoginModel = require('../models/login-model'),
      lm = new LoginModel();

/*-------------Variables de prueba------------------*/
let cliente = require('../test/Cliente'),
    visitante = require('../test/Visitante');
/*--------------------------------------------------*/

class LoginController {

    getAllUsers(req, res, next) { //nos traerá todos los datos de la tabla

        /*lm.getAllUsers((err, data) => {
            if(!err){
                //debe haber un archivo index.pug en /views/index.pug
                res.render('index', {
                    title: 'Indentation War',
                    data: data                  //el objeto data contiene la información del query
                });
            }
        });*/
    }

    getOneUser(req, res, next) {  //obtener un registro específico
        /*let id = req.params.id;
        console.log(id);

        lm.getOneUser(id, (err, data) => {
            if(!err){
                //debe visualizar una vista que se llame 'edit.pug' (frontend)
                res.render('edit', {
                    title: 'Editar Contacto',
                    data: data                              //'data' es el objeto que sale del query
                });
            }
        });*/
    }

    saveUser(req, res, next) {
        /*let contacto = {
            id : (req.body.id || 0),
            name : req.body.name,       //se obtienen las entradas del formulario, están como aparecen en los campos de la base de datos
            twitter: req.body.twitter,
            country: req.body.country,
            side: req.body.side
        };

        console.log(contacto);

        tm.save(contacto, (err) => {
            if(!err){
                res.redirect('/');
            }else {
                return next(new Error('Registro no guardado'));
            }
        });*/

    }

    deleteUser(req, res, next) {
        /*let id = req.params.id;
        console.log(id);

        tm.delete(id, (err, data) =>{
            if(!err){
                res.redirect('/');
            }else {
                return next(new Error('Registro no encontrado'));
            }
        });*/
    }

    addForm(req, res, next) {
        //debe haber un archivo llamado add.pug en /views/add.pug
        //res.render('add', { title: 'Agregar Contacto' });
    }

    error404(req, res, next) {
        let err = new Error();

        err.status = 404;
        err.statusText = 'No se encontró';
        res.render('error', { error: err});
    }
}

module.exports = LoginController;
