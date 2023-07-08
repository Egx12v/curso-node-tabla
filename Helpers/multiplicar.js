
const colors = require('colors/safe');
const fs = require("fs");
/* colors.setTheme({
    s1: "#e3f2fd",
    s2: "#bbdefb",
    s3: "#90caf9",
    s4: "#64b5f6",
    s5: "#42a5f5",
    s6: "#2196f3",
    s7: "#1e88e5",
    s8: "#1976d2",
    s9: "#1565c0",
    s10: '\x1B[4m',
    s11: "red",
    'yellow': ['\x1B[37m', '\x1B[39m'],
    yellowz: [`\x1B[33;2;12;42;42m`, `\x1B[39;2;12;42;42m`],
    s: '\x1B[37m',
})
 */

try {
    colors.setTheme(require('./../config/colors'));
} catch (err) {
    console.log("Error al cargar el archivo: ".err);
}

//! En node no podemos usar ENMACScritp 6
//* export contst chala no se puede*/
const CreateFile = (base = 5) => {

    return new Promise((resolve, reject) => {

        console.log("===============")
        console.log(" Tabla del ", base)
        console.log("===============")
        let salida = '';
        for (let index = 1; index <= 10; index++) {
            salida += ` ${base} x ${index}  = ${index * base} \n`
        }

        console.log(salida)

        const file = fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
            if (err) {
                throw err
            }
            console.log("Todo bien al parecer... :) ")

        })

        if (file) {
            resolve("Archivo se ha creado con exito name:");
        } else {
            reject("Malo malo");
        }




    })




}
const palleteColor = [
    "#e3f2fd",
    "#bbdefb",
    "#90caf9",
    "#64b5f6",
    "#42a5f5",
    "#2196f3",
    "#1e88e5",
    "#1976d2",
    "#1565c0",
    "#0d47a1",
]


const CreateFileA = async (base = 5, listar, limit) => {
    try {

        let salida = '';
        for (let index = 1; index <= limit; index++) {
            salida += ` ${base} ${"X"/* s */} ${index}  = ${index * base} \n`
            if (listar && index == 1) {
                console.log(colors.green("=============================="))
                console.log(" Tabla del ", colors.green(base), " - limite ", limit)
                console.log(colors.green("=============================="))
                //console.log(salida)
            }
            if (listar) {
                let tmp = 's' + index;
                console.log(colors.green(index), " x ", `${colors.green(base)}`, "=", `${colors.yellow(` ${base * index}`)}`)
            }
        }

        // console.log(salida)

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

        return "Good, exporting data to .Txt"
    } catch (error) {
        throw error
    }


}
//! En cambio podemos exportar un objeto con una función
module.exports = {
    //! Nombre que sale al importar : función a la que se apunta
    //CreateFile: CreateFile => esto es redundante en e6
    CreateFile,
    CreateFileA
}