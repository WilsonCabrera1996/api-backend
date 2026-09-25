import express from 'express'; 
import { EmpleadoController } from '../controllers/empleados.controllers.js'; 
import { MongoEmployeeRepository } from '../repositories/mongo-employee.repository.js';
import { validateData } from '../middlewares/validation.middleware.js';
import { 
  createEmployeeSchema, 
  updateEmployeeSchema, 
  employeeParamsSchema 
} from '../dtos/employee.dto.js';

const router = express.Router(); 

const repository = new MongoEmployeeRepository();
const empleado = new EmpleadoController(repository);

router.get('/empleados', empleado.getAllEmployees); 

router.post(
  '/empleados', 
  validateData(createEmployeeSchema, 'body'), 
  empleado.createEmployee
); 

router.put(
  '/empleados/:id', 
  validateData(employeeParamsSchema, 'params'), 
  validateData(updateEmployeeSchema, 'body'), 
  empleado.updateEmployee
); 

router.delete(
  '/empleados/:id', 
  validateData(employeeParamsSchema, 'params'), 
  empleado.deleteEmployee
); 

export default router;