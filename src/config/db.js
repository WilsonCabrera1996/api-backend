import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error("La variable de entorno MONGO_URI no está definida.");
    }
    
    const conn = await mongoose.connect(mongoUri);
    console.log(`MongoDB Atlas Conectado exitosamente: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error al conectar con MongoDB Atlas: ${error}`);
    process.exit(1);
  }
};