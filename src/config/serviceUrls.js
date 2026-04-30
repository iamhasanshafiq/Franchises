const stripTrailingSlashes = (value) => (value ? value.replace(/\/+$/, "") : "");

export const FRANCHISE_URL = stripTrailingSlashes(import.meta.env.VITE_FRANCHISE_URL);
export const WALLET_URL = stripTrailingSlashes(import.meta.env.VITE_WALLET_URL);
export const AUTH_URL = stripTrailingSlashes(import.meta.env.VITE_AUTH_URL);
export const FILE_UPLOAD_URL = stripTrailingSlashes(import.meta.env.VITE_BASE_URL_FILE_UPLOAD);

export const joinUrl = (base, path) => {
  if (!base) return path || "";
  if (!path) return base;
  return `${base}${path.startsWith("/") ? "" : "/"}${path}`;
};

