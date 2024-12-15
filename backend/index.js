// HITO 4 BACKEND PROYECTO FINAL
//para el backend
require("dotenv").config();

/* para habilitar los cors */
const cors = require("cors");
// Importar express y se ejecuta para obtener un enrutador (app)
const express = require("express");
const app = express();
const usersRoutes = require("./routes/usersRoutes");

//console.log("DATABASE_URL:", process.env.DATABASE_URL); // Mostrar valor en consola

// Configuración de CORS para permitir solicitudes con credenciales
const corsOptions = {
  origin: "https://hito-4-render-1.onrender.com", // El origen de tu frontend
  credentials: true,
  exposedHeaders: ["Authorization"], // Permitir enviar cookies o encabezados de autorización
};
app.use(cors(corsOptions)); // se permite cors para todas las rutas
/* parsear el cuerpo de la consulta */
app.use(express.json());
//app.use("/publicaciones", usersRoutes);
app.use(usersRoutes);

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.get("/api", (req, res) => {
  res.json({ message: "¡Hola desde el backend!" });
});

//para ocupar .env
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});

module.exports = app; // Exportamos app para los test
