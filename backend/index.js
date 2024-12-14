// HITO 4 BACKEND PROYECTO FINAL
//para el backend
//require("dotenv").config(); // Cargar variables de entorno
import { config } from "dotenv";
/* para habilitar los cors */
//const cors = require("cors");
import cors from "cors";
// Importar express y se ejecuta para obtener un enrutador (app)
//const express = require("express");
import express from "express";
const app = express();
//const usersRoutes = require("./routes/usersRoutes");
import usersRoutes from "./routes/usersRoutes.js";

// Configuración de CORS para permitir solicitudes con credenciales
// const corsOptions = {
//   // origin: "https://hito-4-render.onrender.com/",
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true,
//   exposedHeaders: ["Authorization"], // Permitir enviar cookies o encabezados de autorización
// };
app.use(cors()); // se permite cors para todas las rutas
/* parsear el cuerpo de la consulta */
app.use(express.json());
//app.use("/publicaciones", usersRoutes);
app.use("/api", usersRoutes);

// const path = require("path");
// app.use(express.static(path.join(__dirname, "public")));


app.get("/api", usersRoutes);

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });


app.get("/", (req, res) => {
  res.json({ message: "¡Hola desde el backend!" });
});

// Manejo de rutas no encontradas (404)
app.use((req, res, next) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

// app.use(express.static("public")); // Servir archivos estáticos desde 'public'

// app.get("*", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html"); // Redirigir todas las rutas al frontend
// });

// Manejo de errores internos del servidor
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({ message: 'Error interno del servidor' });
});

//Configuración del puerto y levantamiento del servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});


export default app; // Exportamos app para los test
