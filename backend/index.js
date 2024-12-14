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

app.use(express.static(path.join(__dirname, "public")));

// Configuración de CORS para permitir solicitudes con credenciales
const corsOptions = {
  origin: "http://localhost:5173", // El origen de tu frontend
  credentials: true,
  exposedHeaders: ["Authorization"], // Permitir enviar cookies o encabezados de autorización
};
app.use(cors(corsOptions)); // se permite cors para todas las rutas
/* parsear el cuerpo de la consulta */
app.use(express.json());
//app.use("/publicaciones", usersRoutes);
app.use(usersRoutes);

app.get("/api", (req, res) => {
  res.json({ message: "¡Hola desde el backend!" });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

//para ocupar .env
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
