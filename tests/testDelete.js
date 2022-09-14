const del = require("../crud/delete.js");

const title = "Titulo de prueba";

if (del(title)) {
  console.log("Tarea eliminada correctamente.");
} else {
  console.log("Ocurrio un error al eliminar una tarea.");
}
return;
