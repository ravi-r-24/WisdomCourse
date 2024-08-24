export class APIError extends Error {
  constructor(statusCode, error = [], message = "Something went wrong") {
    super(message);
    this.statusCode = statusCode;
    this.error = error;
    this.success = false;
    this.message = message;
  }
}
