const express = require("express");

const app = express();
const port = process.env.port || 3000;

app.get("/", (req, res) => {
  res.send("Hola viejo");
});

app.listen(port);
console.log("Server listen port", port);

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
