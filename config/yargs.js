// Optimización de yargs (video 35)
const opts = { // opts = opciones

    base: {
        demand: true, // obligatorio
        alias: 'b' // permite que base se puede llamar también de esta manera (como para reducir si se quiere)
    },
    limite: {
        alias: 'l',
        default: 10 // valor por defecto si no se envia
    }

};

const argv = require( 'yargs' )
                .command('listar', 'Imprime en consola la tabla de multiplicar', opts ) 
                .command('crear', 'Genera un archivo con la tabla de multiplicar', opts ) 
                .help() // Agrega que la función listar mande ayudas de sus parámetros y funcionalidad
                .argv;


// Exportar para usar esta configuración
module.exports = {

    argv

};