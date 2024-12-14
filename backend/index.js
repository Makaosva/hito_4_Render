// HITO 4 BACKEND PROYECTO FINAL
//para el backend
require("dotenv").config(); // Cargar variables de entorno

console.log("PG_STRING_URL:", process.env.PG_STRING_URL); // Mostrar valor en consola

/* para habilitar los cors */
const cors = require("cors");
// Importar express y se ejecuta para obtener un enrutador (app)
const express = require("express");
const app = express();
const usersRoutes = require("./routes/usersRoutes");

// Configuración de CORS para permitir solicitudes con credenciales
const corsOptions = {
  origin: "https://hito-4-render.onrender.com/",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  exposedHeaders: ["Authorization"], // Permitir enviar cookies o encabezados de autorización
};
app.use(cors(corsOptions)); // se permite cors para todas las rutas
/* parsear el cuerpo de la consulta */
app.use(express.json());
app.use("/publicaciones", usersRoutes);
app.use(usersRoutes);

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

//para ocupar .env
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});

app.get("/api", usersRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api", (req, res) => {
  res.json({ message: "¡Hola desde el backend!" });
});

app.use(express.static("public")); // Servir archivos estáticos desde 'public'

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html"); // Redirigir todas las rutas al frontend
});

module.exports = app; // Exportamos app para los test
