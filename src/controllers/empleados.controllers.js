export class EmpleadoController {
  constructor(repository) {
    this.repository = repository;
  }

  getAllEmployees = async (req, res) => {
    try {
      const empleados = await this.repository.findAll();
      res.json(empleados);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  createEmployee = async (req, res) => {
    try {
      const nuevoEmpleado = await this.repository.create(req.body);
      res.status(201).json(nuevoEmpleado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  updateEmployee = async (req, res) => {
    try {
      const actualizado = await this.repository.update(req.params.id, req.body);
      if (!actualizado) {
        return res.status(404).json({ error: 'Empleado no encontrado' });
      }
      res.json(actualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  deleteEmployee = async (req, res) => {
    try {
      const eliminado = await this.repository.delete(req.params.id);
      if (!eliminado) {
        return res.status(404).json({ error: 'Empleado no encontrado' });
      }
      res.json({ message: 'Empleado eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}