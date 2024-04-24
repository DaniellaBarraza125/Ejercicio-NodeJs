const Logger = require("logplease");
const numeros = require("./numeros.js");

const logger = Logger.create("esPar");

const valores = [2, 3, 101, 201, 202, 100];

// console.log(numeros.esPar(5));
// console.log(numeros.esPar(6));

// const usarEsPar = (numero) => {
//     return numeros.esPar(numero);
// };

// logger.debug("hola", usarEsPar(5));

valores.forEach((numero) => {
    numeros.esPar(numero)
        ? logger.info(`El número ${numero} es par`)
        : logger.error(`El número ${numero} no es par`);
});
