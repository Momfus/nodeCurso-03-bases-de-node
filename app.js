// Seccion 4

// const multiplicar = require('./multiplicar/multiplicar'); //  No hace falta poner .js al archivo porque siempre tiene que ser un js asi que es redundante

const argv = require('./config/yargs').argv;
const colors = require('colors/safe'); // Libreria que permite poner colores en consola, el "safe" es para que no interfiera en el prototipo que en algunos casos hace que justo tal vez el atributo a cambiar se llama igual que un color

// Una forma más ordenada de hacer lo de arriba
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); // Esto es usando la característica de destructuración

// let base = '7';

// console.log(  module ); // El modulo es parte de node.js que tiene las exportaciones, el paht que se ejecuta, las carpetas que tiene, etc (esta disponible a lo largo de toda la aplicación)

// console.log( process ); // Variable de entorno de node.js con mucha información de todo lo que corre en el ssoo actual.
// console.log( process.argv ); // Con esto se muestra lo que se recibe de parámetro al ejecutar node desde consola

// << Recibir de consola el argumento de la base usada para multiplicar >> 
// Esto es muy volatil ya que si no mandas una base o algo que no es correcto, es facil tener errores
// let argv = process.argv;
// let parametro = argv[2]; // Desde el tercer parámetro recibe los mismos (los anteriores tiene los path)
// let base = parametro.split('=')[1]; // Separo lo que no me interesa antes del igual y obtengo lo que le sigue que es el número del parámetro

// << usando yargs para manejo de argumentos de consola (video 33)>>
// console.log( 'Limite', argv.limite );

// << Ejecutar comando listar (video 34) >>
console.log(argv);

let comando = argv._[0];

switch( comando ) {

    case 'listar': {

        console.log('listar');
        listarTabla( argv.base, argv.limite );
        break;

    }

    case 'crear': {

        console.log('crear');
        
        crearArchivo( argv.base, argv.limite )
                .then( archivo => console.log(`Archivo creado: `, colors.green(archivo) ))
                .catch( err => console.log( err ));

        break;

    }

    default: {

        console.log('Comando no reconocido');
        break;
        

    }

}
