// HITO 4 BACKEND PROYECTO FINAL
//para el backend
import "dotenv/config";

/* para habilitar los cors */
import cors from "cors";
// Importar express y se ejecuta para obtener un enrutador (app)
import express from "express";
export const app = express(); // Exportamos app para los test
import usersRoutes from "./routes/usersRoutes.js";
import path from "path";

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
//app.use("/publicaciones", usersRoutes);
app.use(usersRoutes);

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
