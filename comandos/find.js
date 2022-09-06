/*
    Esta funcionalidad recibirá un parámetro y deberá retornar un true o false dependiendo 
    de si encuentra o este parámetro dentro del listado de tareas (cómo título).
*/ 

const tasks = require('../tasksData.js');

const find = (title) => {
    
/*
    Método largo.
*/

    for (let i = 0; i<tasks.length; i++) {
        if (tasks[i].title === title) {
            return true;
        }
    }
    return false;

/*
    Método rapido.
    return tasks.find(task => task.title === title);
*/

};

module.exports = find;
