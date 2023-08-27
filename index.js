const express = require("express");
const fs = require("fs");
const cors = require("cors");
const database = "db.json";

const saveData = (data) => {
  fs.writeFileSync(database, JSON.stringify(data), "utf-8");
};

const loadData = () => {
  try {
    const jsonData = fs.readFileSync(database, "utf-8");
    return JSON.parse(jsonData);
  } catch (err) {
    return {};
  }
};

const app = express();
const port = 8080;

app.use(cors());

app.get("/", (req, res) => {
  res.end("The API is working on /api/noticias");
});

app.get("/api/noticias", (req, res) => {
  const objetos = loadData();
  res.json(objetos);
});

// Iniciar el servidor
app.listen(port);
console.log("Server listen port", port);
