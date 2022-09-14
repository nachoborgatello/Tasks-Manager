/*  
    Esta funcionalidad deberá retornar simplemente el listado completo de las tareas. 
    Para ello, deberá leer por supuesto el listado completo, recorrerlo y retornar solamente 
    los títulos de cada tarea, no su descripción, como un array de strings.
*/

const tasks = require('../tasksData.js');

var titulos = [""];

/**
 * Este metodo devuelve solo los titulos de la lista de tasks.
 * @returns 
 */
const list = () => {
    for(i = 0; i < tasks.length; i++) {
        titulos.push(tasks[i].title);
    }
    return titulos;
}

module.exports = list;