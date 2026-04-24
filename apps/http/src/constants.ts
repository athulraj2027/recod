export const STATUS_CODES = {
  // --- 2XX SUCCESS ---
  OK: 200, // Standard success
  CREATED: 201, // Resource created (useful for Sign Up / New Track)
  NO_CONTENT: 204, // Success, but nothing to return (useful for Delete)

  // --- 4XX CLIENT ERRORS ---
  BAD_REQUEST: 400, // Validation errors (missing email, weak password)
  UNAUTHORIZED: 401, // No valid token (User needs to log in)
  FORBIDDEN: 403, // Token is valid, but user doesn't own this track
  NOT_FOUND: 404, // Route or DB record doesn't exist
  CONFLICT: 409, // Resource already exists (Email already in use)
  UNPROCESSABLE: 422, // Syntax is right, but logic is wrong (e.g., OTP expired)
  TOO_MANY_REQUESTS: 429, // Rate limiting (spamming the Login button)

  // --- 5XX SERVER ERRORS ---
  INTERNAL_ERROR: 500, // Something crashed in your code
  NOT_IMPLEMENTED: 501, // Route exists but logic isn't written yet
  SERVICE_UNAVAILABLE: 503, // Database is down or maintenance mode
} as const;

// Optional: Type for use in TypeScript
export type StatusCode = (typeof STATUS_CODES)[keyof typeof STATUS_CODES];
