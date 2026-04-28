import dotenv from "dotenv";

dotenv.config();

const getEnv = (key: string, fallback?: string): string => {
  const value = process.env[key] || fallback;

  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
};

const env = {
  port: getEnv("BACKEND_PORT", "8000"),
  dbUrl: getEnv("DATABASE_URL"),
  clientUrl: getEnv("FRONTEND_URL"),

  accessTokenSecret: getEnv("ACCESS_TOKEN_SECRET"),
  accessTokenExpiry: getEnv("ACCESS_TOKEN_EXPIRY", "10m"),
  refreshTokenSecret: getEnv("REFRESH_TOKEN_SECRET"),
  refreshTokenExpiry: getEnv("REFRESH_TOKEN_EXPIRY", "7d"),

  google: {
    clientId: getEnv("GOOGLE_CLIENT_ID"),
    clientSecret: getEnv("GOOGLE_CLIENT_SECRET"),
    redirectUrl: getEnv("GOOGLE_REDIRECT_URL"),
  },

  github: {
    clientId: getEnv("GITHUB_CLIENT_ID"),
    clientSecret: getEnv("GITHUB_CLIENT_SECRET"),
    redirectUrl: getEnv("GITHUB_REDIRECT_URL"),
  },
} as const;

export default env;
