'user strict';
var sql = require('./db.js');

//Task object constructor
var Task = function(task){
    this.nombre = task.nombre;
    this.ruta = task.ruta;
    this.fecha = new Date();
	this.compania = task.compania;
};
Task.createTask = function createUser(newTask, result) {    
        sql.query("INSERT INTO juego set ?", newTask, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};

Task.getAllTask = function getAllTask(result) {
        sql.query("Select * from juego", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('juegos : ', res);  

                 result(null, res);
                }
            });   
};


module.exports= Task;
