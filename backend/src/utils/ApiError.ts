class ApiError extends Error {
  // instance variables
  statusCodes: number;
  errors: string[];
  isOperational: boolean;

  constructor(statusCode: number, message: string, errors: string[] = []) {
    super(message);

    this.statusCodes = statusCode;
    this.errors = errors;
    this.isOperational = true;

    // stack trace
    Error.captureStackTrace(this, this.constructor);
  }
}

export default ApiError;
