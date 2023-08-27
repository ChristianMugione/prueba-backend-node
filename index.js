const express = require("express");

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hola viejo");
});

app.get("/api/noticias", (req, res) => {
  const objetos = [
    { id: 1, nombre: "Objeto 1" },
    { id: 2, nombre: "Objeto 2" },
    { id: 3, nombre: "Objeto 3" },
  ];

  res.json(objetos);
});

// Iniciar el servidor
app.listen(port);
console.log("Server listen port", port);
