/*  
    Esta funcionalidad deberá retornar simplemente el listado completo de las tareas. 
    Para ello, deberá leer por supuesto el listado completo, recorrerlo y retornar solamente 
    los títulos de cada tarea, no su descripción, como un array de strings.
*/

const tasks = require('../tasksData.js');

const list = () => {
    for(i = 0; i < tasks.length; i++) {
        console.log(tasks[i].title);
    }
}

module.exports = list;