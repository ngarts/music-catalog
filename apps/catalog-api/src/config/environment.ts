import "dotenv/config";

export interface Environment {
  port: number;
  host: string;
  mongodbUri: string;
  mongodbDatabase: string;
  corsOrigin: string;
}

function requireEnvironmentVariable(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function parsePort(value: string | undefined): number {
  const port = Number(value ?? "3000");

  if (!Number.isInteger(port) || port <= 0 || port > 65535) {
    throw new Error(`Invalid PORT value: ${value}`);
  }

  return port;
}

export function loadEnvironment(): Environment {
  return {
    host: process.env.HOST ?? "0.0.0.0",
    port: parsePort(process.env.PORT),
    mongodbUri: requireEnvironmentVariable("MONGODB_URI"),
    mongodbDatabase: requireEnvironmentVariable("MONGODB_DATABASE"),
    corsOrigin: requireEnvironmentVariable("CORS_ORIGIN")
  };
}