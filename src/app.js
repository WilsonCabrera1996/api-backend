import express from 'express';
import cors from 'cors';

const app = express();

// Middlewares esenciales
app.use(cors());
app.use(express.json());

// Ruta de prueba para verificar que la API responde
app.get('/', (req, res) => {
  res.json({ 
    ok: true, 
    message: 'API funcionando correctamente y conectada a MongoDB Atlas' 
  });
});

export default app;