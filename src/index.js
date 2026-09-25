import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import { connectDB } from './config/db';

const PORT = process.env.PORT || 3000;

const main = async () => {
  // 1. Conectar a MongoDB Atlas primero
  await connectDB();

  // 2. Levantar el servidor Express si la conexión es exitosa
  app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
  });
};

main();