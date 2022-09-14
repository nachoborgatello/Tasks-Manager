const read = require("./read.js");
const fs = require("fs");
const path = require("path");

const create = (title, desc) => {
  /*
        Leemos el archivo.
    */
  const previousData = read();

  /*
        Definimos nuestro objeto a agregar.
        Lo definimos de esta forma porque tienen el mismo nombre
        que los campos.
    */
  const newTask = {
    title,
    desc,
  };

  /*
        Formamos el nuevo array de tareas para
        sobreescribir el JSON.
        ... indica que la nueva tarea se agrega al último.
    */

  const lastData = [...previousData, newTask];

  /*
        Stringify toma un elemento literal de JavaScript
        y lo convierte en un JSON.
        Es el metodo opuesto a parse.
    */
  try {
    fs.writeFileSync(
      path.join(__dirname, "../tasksData.json"),
      JSON.stringify(lastData)
    );
    return true;
  } catch (e) {
    console.log("e");
  }
};

module.exports = create;
