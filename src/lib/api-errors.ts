/**
 * API Error Handler
 * Standardized error responses for API routes
 */

export class ApiError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public errors?: Record<string, string[]>
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export function handleApiError(error: unknown) {
  console.error('API Error:', error);

  if (error instanceof ApiError) {
    return {
      statusCode: error.statusCode,
      body: {
        success: false,
        message: error.message,
        errors: error.errors,
      },
    };
  }

  if (error instanceof Error) {
    return {
      statusCode: 500,
      body: {
        success: false,
        message: error.message,
      },
    };
  }

  return {
    statusCode: 500,
    body: {
      success: false,
      message: 'Internal server error',
    },
  };
}

/**
 * Success Response Handler
 */
export function successResponse<T>(data: T, message = 'Success') {
  return {
    success: true,
    message,
    data,
  };
}