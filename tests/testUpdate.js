const update = require("../crud/update.js");

const title = "Titulo de prueba";
const newDesc = "Nueva descripción de prueba";

if (update(title, newDesc)) {
  console.log("Tarea actualizada correctamente.");
} else {
  console.log("Ocurrio un error al actualizar una tarea.");
}
return;
