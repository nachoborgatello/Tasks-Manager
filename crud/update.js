const read = require("./read.js");
const fs = require("fs");
const path = require("path");

const update = (title, newDesc) => {
  /*
        Leemos el archivo.
    */
  const previousData = read();

  for(let i = 0; i < previousData.length; i++) {
    if(previousData[i].title.toLowerCase() === title.toLowerCase()) {
        previousData[i].desc = newDesc;
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

module.exports = update;
