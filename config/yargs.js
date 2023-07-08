const argv = require('yargs')
    .option('l', {
        alias:"listar",
        type:'boolean',
        demandOption:false,
        default:false,
        describe:"Bandera para listar tabla->"
    })
    .option('m', {
        alias:"max",
        type:'number',
        demandOption:false,
        default:10,
        describe:"Limite maximo de la iteración de la tabla->"
    })
    .option('b',
        {
            alias: "base",
            type: "number",
            demandOption: true,

        }
    ).check((argv, options) => {
        if (isNaN(argv.b)) { throw 'La base tiene que ser un número' }
        return true;//! Si no existe errores, retornamos true para poder continuar
    })
    .argv;

    module.exports = argv //* Se exporta como tal no como objeto=> como archivo?*/