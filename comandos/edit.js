/* 
    Esta funcionalidad aún no estará performando al 100% en esta etapa.
    Pero ya la dejaremos creada para futuras iteraciones de nuestra app. 
    Debería recibir dos parámetros: el primero es el título de la tarea a editar, 
    y el segundo es la nueva descripción de la tarea a editar. 
    Como esta funcionalidad no hará nada realmente aún, simplemente deberá 
    devolver un objeto literal que contenga la información que a futuro se
    guardaría en la tarea.
*/

const tasks = require('../tasksData.js');

const edit = (title,newDescription) => {
    for(i = 0; i < tasks.length; i++) {
        if(tasks[i].title === title) {
            return {
                title: title,
                desc: newDescription,
            }
        }
    }
}

module.exports = edit;