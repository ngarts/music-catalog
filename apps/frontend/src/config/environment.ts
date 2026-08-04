function requireEnvironmentVariable(name: string): string {
  const value = import.meta.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export const environment = {
  catalogApiUrl: requireEnvironmentVariable("VITE_CATALOG_API_URL")
};