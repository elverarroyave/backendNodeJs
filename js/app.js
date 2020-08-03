const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

//  Creamos una constante server, que usando la api del modulo http lo que hace es crear una instancia del servidor que va a atender las peticiones 
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola Mundo\n');
});

//Escuchamos el servidor 
server.listen(port, hostname, () => {
    console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});