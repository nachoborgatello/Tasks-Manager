const read = require("./read.js");
const fs = require("fs");
const path = require("path");

const update = (title, newDesc) => {
  /*
        Leemos el archivo.
    */
  const previousData = read();

  for (let i = 0; i < previousData.length; i++) {
    if (previousData[i].title.toLowerCase() === title.toLowerCase()) {
      previousData[i].desc = newDesc;
      break;
    }
    /*
      Si estoy en la ultima pasada y 
      no se encontro el titulo, devuelvo false.
    */
    if (i === previousData.length - 1) {
      return false;
    }
  }

  try {
    fs.writeFileSync(
      path.join(__dirname, "../tasksData.json"),
      JSON.stringify(previousData)
    );
    return true;
  } catch (e) {
    console.log("Ha ocurrido un error.");
    console.log(e);
    return false;
  }
};

module.exports = update;
