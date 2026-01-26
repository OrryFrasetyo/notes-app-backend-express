import response from '../utils/response.js';
import { ClientError } from '../exceptions/index.js';

const ErrorHandler = (err, req, res) => {
  if (err instanceof ClientError) {
    return response(res, err.statusCode, err.message, null);
  }

  const status = err.statusCode || err.status || 500;
  const message = err.message || 'Internal Server Error';

  console.error('Unhandled Error:', err);
  return response(res, status, message, null);
};

export default ErrorHandler;
