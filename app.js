
//const { boolean } = require("yargs");
const { CreateFile, CreateFileA } = require("./Helpers/multiplicar")

const argv = require('./config/yargs')

const base = argv.b;
const listar = (argv.l);
const limit = argv.m;
console.clear();

//console.log(process.argv)
//! Desde esta parte podemos tomar valores que viene por termial, pero no es buena idea
//! ya que deberíamos manejar todos los posibles parametros y convinaciones se pueded pero no es
//! viable.

//console.log("Package: \n", argv, "\n")//* Desde package*/
//console.log("Sys: \n",process.argv);//"Desde sys vanilla"


/* let Desc = [, , ARG3] = process.argv;
console.log(ARG3);
let [,desf=5]= ARG3.split("=");
let des2 = ARG3.split("=")[1];
//console.log(desf); */
//console.log("Sendig data", base, listar, limit )
CreateFileA(base,listar, limit)
    .then(e => console.log("=>=>=> ", e))
    .catch(er => console.log(" = :( ", er))