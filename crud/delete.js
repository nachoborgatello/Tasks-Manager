const read = require("./read.js");
const fs = require("fs");
const path = require("path");

const del = (title) => {
  /*
        Leemos el archivo.
    */
  var previousData = read();

  /*
        Formamos el nuevo array de tareas para
        eliminar el elemento y sobreescribir el JSON
    */

  for (let i = 0; i < previousData.length; i++) {
    if (previousData[i].title.toLowerCase() === title.toLowerCase()) {
  /*
        Obtenemos el indice del título y eliminamos con el metodo Splice.
        Splice permite quitar o agregar elementos en cierta parte de un array.
    */
      previousData.splice(i, 1);
      break;
    }
  }

  try {
    fs.writeFileSync(
      path.join(__dirname, "../tasksData.json"),
      JSON.stringify(previousData)
    );
    return true;
  } catch (e) {
    console.log("e");
  }
};

module.exports = del;
