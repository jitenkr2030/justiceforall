export class AppError extends Error {
  statusCode: number
  isOperational: boolean

  constructor(message: string, statusCode: number) {
    super(message)
    this.statusCode = statusCode
    this.isOperational = true

    Error.captureStackTrace(this, this.constructor)
  }
}

export const handleError = (err: Error | AppError) => {
  if (err instanceof AppError && err.isOperational) {
    console.error(`Operational error: ${err.message}`)
  } else {
    console.error("An unexpected error occurred:", err)
    // Here you would typically log to a service like Sentry
  }
}

