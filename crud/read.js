/*
    Node.js tiene un módulo nativo que nos permite trabajar con la
    lectura y escritura de archivos: File System.
    Path nos da la dirección desde el disco, la ruta global, NO la local.
    path.join(__dirname,"../tasksData.js")
 */

const fs = require("fs");
const path = require("path");

/*
        - El primero será la ruta(path) del archivo que queremos leer.
        - El segundo será la codificación del archivo que estamos intentando leer.
            Esta codificación permite al fs interpretar los caracteres que va a
            contener ese archivo para que lea correctamente. 
        const tasks = fs.readFileSync("../tasksData.json", "utf8");
*/

const read = () => {
  const tasks = fs.readFileSync(
    path.join(__dirname, "../tasksData.json"),
    "utf8"
  );
  const parsedTasks = JSON.parse(tasks); //Parse convierte un array en un objeto literal.
  return parsedTasks;
};

module.exports = read;

/*
    Formas de refactorizar.
    const read = () => JSON.parse(fs.readFileSync("../tasksData.json","utf8"));
    module.exports = () => JSON.parse(fs.readFileSync("../tasksData.json","utf8"));
*/
