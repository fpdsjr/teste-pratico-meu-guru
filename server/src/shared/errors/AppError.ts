export class AppError extends Error {
  constructor(message: string, public statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}
