/*
    Esta funcionalidad hace algo similar al find.js, pero en vez de retornar 
    si encontró el valor que se le pasa por parámetro o no, esta función deberá 
    retornar todas las tareas que contengan (en su título) lo que se le pasa por 
    parámetro a la función.
*/


const tasks = require('../tasksData.js');

var flag = 0;
var resultados = [];
var title = "";

const filter = (parametro) => {
    for (let i = 0; i < tasks.length; i++) {
        
        title = tasks[i].title

        for (let j = 0; j < parametro.length; j++) {
            if (title[j] === parametro[j]){
                flag += 1;
            }
        }

        if (flag === parametro.length) {
            resultados.push(tasks[i].title);
        }
        flag = 0;
    }
    return resultados;
}


module.exports = filter;