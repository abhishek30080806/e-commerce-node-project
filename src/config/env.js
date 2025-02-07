export const config = {
  // Server Port
  PORT: process.env.PORT || 5000, // Default 5000 rahega agar .env me na ho

  // Database Configuration
  MONGO_URL: process.env.MONGO_URL,

  // JWT Secrets
  ACCESS_SECRET: process.env.ACCESS_SECRET,
  REFRESH_SECRET: process.env.REFRESH_SECRET,
};
