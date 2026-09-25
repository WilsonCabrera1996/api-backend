import express from 'express';
import cors from 'cors';
import empleadoRoutes from './routes/empleados.routes.js';
import { globalErrorHandler } from './middlewares/error.middleware.js';

const app = express();

// Middlewares esenciales
app.use(cors());
app.use(express.json());

// Registrar las rutas de la API (ej: /api/empleados)
app.use('/api', empleadoRoutes);

// Ruta de prueba para verificar que la API responde
app.get('/', (req, res) => {
  res.json({ 
    ok: true, 
    message: 'API funcionando correctamente y conectada a MongoDB Atlas' 
  });
});

// Middleware global de manejo de errores (Debe ir siempre al final de las rutas)
app.use(globalErrorHandler);

export default app;