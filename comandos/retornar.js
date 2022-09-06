/* 
    Esta funcionalidad recibirá un título por parámetro (string) y en caso de que 
    ese título coincida con alguno de los que existen dentro del listado. 
    Deberá retornar la descripción que corresponde a esa tarea.
*/

const tasks = require('../tasksData.js');

const retornar = (title) => {
    for(i = 0; i < tasks.length; i++) {
        if(tasks[i].title === title) {
            return tasks[i].desc;
        }
    }
}

module.exports = retornar;