import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import routes from './routes/routes.js'; // Importar rutas

// Obtener __dirname en módulos ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Crear una instancia de la aplicación Express
const app = express();
const PORT = 3000;

// Middleware para parsear JSON en las solicitudes
app.use(express.json());

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Usar rutas importadas
app.use('/api', routes); // Aquí defines el prefijo de las rutas

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
  console.log(`Visita http://localhost:${PORT} en tu navegador`);
});
