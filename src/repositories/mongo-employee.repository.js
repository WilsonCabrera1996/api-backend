import Empleado from '../models/empleado.model.js';

export class MongoEmployeeRepository {
  async findAll() {
    return await Empleado.find();
  }

  async create(data) {
    const empleado = new Empleado(data);
    return await empleado.save();
  }

  async update(id, data) {
    return await Empleado.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await Empleado.findByIdAndDelete(id);
  }
}