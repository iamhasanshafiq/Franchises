import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Derive the base path automatically for GitLab Pages.
const gitlabPagesBase = process.env.CI_PAGES_URL
  ? new URL(process.env.CI_PAGES_URL).pathname
  : "/";

export default defineConfig(({ mode }) => ({
  // base: gitlabPagesBase,

  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },

  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean,
  ),
  base: mode === "production" ? "/Franchises/" : "/",
  // base: "/Franchises/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: [],
  },
}));