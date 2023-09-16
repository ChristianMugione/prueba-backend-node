const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const fs = require("fs");
const cors = require("cors");
const database = "db.json";
const { Client } = require("pg");

const app = express();
app.use(cors());

// const client = new Client({
//   host: "ep-morning-poetry-33271917.us-east-2.aws.neon.tech",
//   user: "fl0user",
//   database: "news",
//   password: "5n7gTputhyLS",
//   port: 5432,
//   sslmode: "require",
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

// client.connect();
// //------------------------------------------
// Rutas
app.get("/", (req, res) => {
  res.send("API de Christian Mugione");
});

// Registro de usuario
// app.post(
//   "/register",
//   [
//     check(
//       "username",
//       "Por favor, introduce un nombre de usuario válido"
//     ).isLength({
//       min: 3,
//     }),
//     check(
//       "password",
//       "La contraseña debe tener al menos 6 caracteres"
//     ).isLength({
//       min: 6,
//     }),
//   ],
//   async (req, res) => {
//     // Validar los datos de entrada
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { username, password } = req.body;

//     try {
//       // Verificar si el usuario ya existe en la base de datos
//       const userExists = await client.query(
//         "SELECT * FROM users WHERE username = $1",
//         [username]
//       );

//       if (userExists.rows.length > 0) {
//         return res.status(400).json({ msg: "El usuario ya existe" });
//       }

//       // Encriptar la contraseña
//       const saltRounds = 10;
//       const hashedPassword = await bcrypt.hash(password, saltRounds);

//       // Insertar el nuevo usuario en la base de datos
//       await client.query(
//         "INSERT INTO users (username, password) VALUES ($1, $2)",
//         [username, hashedPassword]
//       );

//       // Crear y responder con un token de autenticación
//       const payload = {
//         user: {
//           username: username,
//         },
//       };

//       jwt.sign(
//         payload,
//         "secretKey", // Cambia esto por una clave secreta más segura en un entorno de producción
//         { expiresIn: 3600 },
//         (err, token) => {
//           if (err) throw err;
//           res.json({ token });
//         }
//       );
//     } catch (err) {
//       console.error(err);
//       res.status(500).send("Error del servidor");
//     }
//   }
// );

// Inicio de sesión de usuario
// app.post(
//   "/login",
//   [
//     check(
//       "username",
//       "Por favor, introduce un nombre de usuario válido"
//     ).isLength({
//       min: 3,
//     }),
//     check("password", "La contraseña es requerida").exists(),
//   ],
//   async (req, res) => {
//     // Validar los datos de entrada
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { username, password } = req.body;

//     try {
//       // Obtener el usuario de la base de datos
//       const result = await client.query(
//         "SELECT * FROM users WHERE username = $1",
//         [username]
//       );
//       const user = result.rows[0];

//       if (!user) {
//         return res.status(400).json({ msg: "El usuario no existe" });
//       }

//       // Verificar la contraseña
//       const isMatch = await bcrypt.compare(password, user.password);

//       if (!isMatch) {
//         return res.status(400).json({ msg: "Contraseña incorrecta" });
//       }

//       // Crear y responder con un token de autenticación
//       const payload = {
//         user: {
//           username: user.username,
//         },
//       };

//       jwt.sign(
//         payload,
//         "secretKey", // Cambia esto por la misma clave secreta utilizada en el registro
//         { expiresIn: 3600 },
//         (err, token) => {
//           if (err) throw err;
//           res.json({ token });
//         }
//       );
//     } catch (err) {
//       console.error(err);
//       res.status(500).send("Error del servidor");
//     }
//   }
// );

// Iniciar el servidor
// app.listen(port, () => {
//   console.log(`Servidor en funcionamiento en el puerto ${port}`);
// });
//------------------------------------------
/*
const connectToDb = () => {
  client
    .connect()
    .then(() => {
      console.log("Conexión exitosa a PostgreSQL");

      // Realiza consultas aquí
      // Por ejemplo, para crear una tabla:
      
      const createTableQuery = `
      CREATE TABLE noticias (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255),
        content VARCHAR(10000),
        image_url VARCHAR(255)
      );
    `;

      return client.query(createTableQuery);
    })
    .then(() => {
      console.log("Tabla creada exitosamente");

      // Cierra la conexión cuando hayas terminado
      client.end();
    })
    .catch((error) => {
      console.error("Error al conectarse a PostgreSQL:", error);
    });
};

connectToDb();*/

const saveData = (data) => {
  fs.writeFileSync(database, data, "utf-8");
};

const loadData = () => {
  try {
    const jsonData = fs.readFileSync(database, "utf-8");
    return jsonData;
  } catch (err) {
    return {};
  }
};

app.use(bodyParser.json());

app.get("/api/noticias", (req, res) => {
  const objetos = loadData();
  // console.log(objetos);
  res.json(JSON.parse(objetos));
});

// Iniciar el servidor
const port = process.env.PORT ?? 3000;
app.listen(port);
console.log("Server listen port", port);
