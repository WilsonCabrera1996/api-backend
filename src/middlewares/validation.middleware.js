import { ZodError } from 'zod';

export const validateData = (schema, target = 'body') => {
  return async (req, res, next) => {
    try {
      const dataToValidate = target === 'body' ? req.body : req.params;
      
      const parsedData = await schema.parseAsync(dataToValidate);
      
      if (target === 'body') {
        req.body = parsedData;
      } else {
        req.params = parsedData;
      }

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          success: false,
          message: "Error de validación perimetral",
          errors: error.issues.map((err) => ({
            campo: err.path.join('.'),
            mensaje: err.message,
          })),
        });
      }

      return res.status(500).json({
        success: false,
        message: "Error interno del servidor durante la validación",
      });
    }
  };
};