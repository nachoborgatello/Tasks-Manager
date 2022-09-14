const create = require("./crud/create.js");
const read = require("./crud/read.js");
const del = require("./crud/delete.js");
const update = require("./crud/update.js");

const action = process.argv[2];
if (!action) {
  console.log("Se necesita ingresar una acción.");
  return;
}

switch (action) {
  case "create": {
    const title = process.argv[3];
    const desc = process.argv[4];

    if (!title || !desc) {
      console.log("No se especifico título o descripción.");
      return;
    }

    if (create(title, desc)) {
      console.log("Se ingreso una nueva tarea correctamente.");
    }
    break;
  }
  case "read": {
    console.log(read());
    break;
  }
  case "delete": {
    const title = process.argv[3];

    if (!title) {
      console.log("No se especifico título.");
      return;
    }

    if (del(title)) {
      console.log("Tarea eliminada correctamente.");
    }
    break;
  }
  case "update": {
    const title = process.argv[3];
    const newDesc = process.argv[4];

    if (!title || !newDesc) {
      console.log("No se especifico título o descripción.");
      return;
    }

    if (update(title, newDesc)) {
      console.log("Tarea actualizada correctamente.");
    }
    break;
  }
  default: {
    break;
  }
}
