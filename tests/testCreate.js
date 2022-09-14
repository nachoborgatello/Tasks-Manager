const create = require("../crud/create.js");

const title = "Titulo de prueba";
const desc = "Descripción de prueba";

if (create(title, desc)) {
  console.log("Se ingreso una nueva tarea correctamente.");
} else {
  console.log("Ocurrio un error al ingresar una nueva tarea.");
}
return;
