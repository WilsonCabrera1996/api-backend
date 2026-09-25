import { z } from 'zod';

export const createEmployeeSchema = z.object({
  nombre: z.string({
    required_error: "El nombre es obligatorio",
    invalid_type_error: "El nombre debe ser un texto"
  })
  .min(1, "El campo 'nombre' no puede estar vacío")
  .min(3, "El nombre debe tener al menos 3 caracteres")
  .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "El campo 'nombre' solo debe contener letras y espacios, no se permiten números"),
  
  cargo: z.string({
    required_error: "El cargo es obligatorio",
    invalid_type_error: "El cargo debe ser un texto"
  }).min(2, "El cargo es obligatorio"),
  
  departamento: z.string({
    required_error: "El departamento es obligatorio",
    invalid_type_error: "El departamento debe ser un texto"
  }).min(2, "El departamento es obligatorio"),
  
  sueldo: z.number({
    required_error: "El sueldo es obligatorio",
    invalid_type_error: "El sueldo debe ser un número"
  }).positive("El sueldo debe ser mayor a cero")
});

export const updateEmployeeSchema = createEmployeeSchema.partial();

export const employeeParamsSchema = z.object({
  id: z.string().regex(/^[0-9a-fA-F]{24}$/, "El ID proporcionado no es un ObjectId válido de MongoDB")
});