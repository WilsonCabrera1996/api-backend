export const globalErrorHandler = (err, req, res, next) => {
  console.error('Error capturado por el interceptor:', err);

  if (err instanceof SyntaxError && 'body' in err) {
    return res.status(400).json({
      success: false,
      message: 'El formato del JSON enviado no es válido. Revisa las comillas, llaves o comas en Thunder Client.',
    });
  }

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Error interno del servidor';

  return res.status(statusCode).json({
    success: false,
    message,
    error: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
};