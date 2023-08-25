// Importa el módulo 'http' incorporado de Node.js
const http = require("http");

// Crea un servidor HTTP
const server = http.createServer((req, res) => {
  // Configura la respuesta HTTP con el estado 200 (OK) y el tipo de contenido
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Escribe "Hola Mundo" en la respuesta
  res.end("Hola Mundo\n");
});

// Escucha en el puerto 3000
server.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000/");
});

// const express = require("express");
// const app = express();
// const port = 3000; // Puedes cambiar el puerto si lo deseas

// // Ruta que devuelve un array de objetos en formato JSON
// app.get("/api/objetos", (req, res) => {
//   const objetos = [
//     { id: 1, nombre: "Objeto 1" },
//     { id: 2, nombre: "Objeto 2" },
//     { id: 3, nombre: "Objeto 3" },
//   ];

//   res.json(objetos);
// });

// Iniciar el servidor
/*
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
*/
