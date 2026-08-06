const catalogApiUrl = import.meta.env.VITE_CATALOG_API_URL;

if (!catalogApiUrl) {
  throw new Error("Missing required environment variable: VITE_CATALOG_API_URL");
}

export const environment = {
  catalogApiUrl,
};
