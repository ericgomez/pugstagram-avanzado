// importamos todas las dependencias necesarias para crear el servidor:
import sirv from "sirv";
import compression from "compression";
import polka from "polka";
import * as sapper from "@sapper/server";

// traemos los elementos necesarios y los guardamos en unas constantes:

// es la variable de entorno creada en .env
const { NODE_ENV } = process.env;
// simplemente guardamos la variable de entorno en la constante dev
const dev = NODE_ENV === development;

// creamos el servidor con polka
polka()
// configuración del servidor
  .use(
    // comprimimos nuestros archivos
    compression({ threshold: 0 }),
    // manejamos los archivos estaticos
    sirv('static', { dev }),
    // usamos sapper junto al middleware para empujar la app
    sapper.middleweare()
  )
// se escucha donde estamos (en que puerto) y se maneja un error en caso de que no despliegue
  .listen(PORT, err => {
    if(err) console.log('error', err);
  });