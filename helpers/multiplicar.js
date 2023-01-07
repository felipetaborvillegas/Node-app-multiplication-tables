const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base, limite, listar) => {

    try {

        if(listar) {
            console.log("====================")
            console.log("  Tabla del:", base  ) 
            console.log("====================")
        }

        let salida = "";

        for(let i=1; i<=limite; i++) {
            salida += (`${base} * ${i} = ${base*i}\n`);
        };

        if(listar) {
            console.log(salida.rainbow);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`
        
    } catch (err) {

        throw err;
    
    }

}

module.exports = {
    crearArchivo
}