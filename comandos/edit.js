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

/**
 * "Editamos" una tarea. Devolvemos un literal object con el titulo y descripción modificada.
 * @param {string} title 
 * @param {string} newDescription 
 * @returns 
 */
const edit = (title,newDescription) => {
    for(i = 0; i < tasks.length; i++) {
        if(tasks[i].title === title) {
            
            newTask = {
                title: title,
                desc: newDescription,
            }

            //tasks.splice(tasks.indexOf(title), 1, newTask);
            return newTask;
        }
    }
    //En caso de no haber coincidencia retornamos un objeto "vacio".
    return {
        title: "",
        desc: "",
    }
}

module.exports = edit;