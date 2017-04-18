'use strict';

//El modelo define todas las consultas a la base de datos

const conn = require('./model');

//aquí empezaremos a implementar la clase Teammodel
class LoginModel{
    getAllUsers(cb) { //nos traerá todos los datos de la tabla
        //aquí realizaremos la conexión a la base de datos
        //conn.query('SELECT * FROM team', cb);
    }

    getOneUser(id, cb) {  //obtener un registro específico
        //conn.query('SELECT * FROM team WHERE id = ?', id, cb);
    }

    saveUser(data, cb) {
        /*conn.query('SELECT * FROM team WHERE id = ?', data.id, (err, rows) => {
            console.log(`Número de registros: ${rows.length}`);

            if(!err){
                return ( rows.length == 1 )
                    ? conn.query('UPDATE team SET ? WHERE id = ?', [data, data.id], cb)
                    : conn.query('INSERT INTO team SET ?', data, cb);
            }
        });*/
    }

    deleteUser(id, cb) {
        //conn.query('DELETE FROM team WHERE id = ?', id, cb);
    }
}

module.exports = LoginModel;
