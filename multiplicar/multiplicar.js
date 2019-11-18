// Requireds
const fs = require('fs'); // Para manejo de archivos
const colors = require('colors'); // Libreria que permite poner colores en consola

// Funciones
let crearArchivo = ( base, limite = 10 ) => {  // limite tiene un valor de defecto, que igual lo maneja yarn como lo definimos pero es buena practica ponerlo igual

    return new Promise ( ( resolve, reject ) => {


        // Revisar que la base sea un número
        if( !Number(base) ){
            reject( `El valor introducido ${ base } no es un número` );
            return; // Así sale de la función
        }

        // Atributos
        let data = '';

        // Ejercicio planteado
        for( let i = 1; i <= limite; i++ ) {

            data += `${ base } * ${ i } = ${ base * i }\n`;

        }

        // Grabar la tabla de multiplicar en un archivo.

        fs.writeFile(`tablas/tabla-${base}-al-${ limite}.txt`, data, ( err ) => { // nombre del archivo, contenido del archivo y manejo de callback de un error

            if (err) { 
                reject(err);
            }
            else {
                resolve( `/tabla-${base}-al-${ limite }.txt` ); // Retorna el nombre del archivo creado            };
            }

        });

    });

};

// Tarea de listarTabla (video 34) --> solo mostrar, no grabar
let listarTabla = ( base, limite = 10 ) => {

   
    console.log('======================'.green);
    console.log(`tabla de ${ base }`.green);
    console.log('======================'.green);
    
    for( let i = 1; i <= limite; i++ ) {

        console.log(`${ base } * ${ i } = ${ base * i }`);

    }


};

// Elementos que deseo usar de manera global
module.exports = {

    crearArchivo, // En la declaración de la función podria colocarse module.exports en vez de let al principio pero es mas ordenado asi
    listarTabla

};