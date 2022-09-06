const find = require("./comandos/find.js");
const list = require("./comandos/list.js");
const retornar = require("./comandos/retornar.js");
const edit = require("./comandos/edit.js");
const filter = require("./comandos/filter.js");

const action = process.argv[2];

if (!action) {
    console.log("Error. Acción invalida");
    return;
}

switch (action) {
    case "find": {
        const title = process.argv[3];
        if (!title) {
            console.log("Has olvidado el título");
            break;
        }
        const exists = find(title);
        console.log("Título:", title);
        console.log("Existe:", exists);
        break;
    }
    case "list": {
        list();
        break;
    }
    case "retornar": {
        const title = process.argv[3];
        if (!title) {
            console.log("Has olvidado el título");
            break;
        }
        console.log("Título: ", title);
        console.log("Descripción: ", retornar(title));
        break;
    }
    case "edit": {
        const title = process.argv[3];
        const newDescription = process.argv[4];
        if (!title) {
            console.log("Has olvidado el título");
            break;
        }
        if (!newDescription) {
            console.log("Has olvidado la descripción");
            break;
        }

        const editTask = edit(title,newDescription);

        console.log ("Título",editTask.title);
        console.log ("Descripción",editTask.desc);

        break;
    }
    case "filter":{
        const parametro = process.argv[3];
        if (!parametro) {
            console.log("Has olvidado añadir un filtro");
            break;
        }

        resultados = filter(parametro);
        console.log("Filtro: ",parametro);
        console.log("Resultados obtenidos: ");
        for (let i = 0; i < resultados.length; i++){
            console.log(resultados[i]);
        }
        break;
    }
    default: {
        console.log("Acción no definida");
        break;
    }
}
