import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Derive the base path automatically for GitLab Pages.
// In GitLab CI, CI_PAGES_URL looks like "https://group.gitlab.io/project".
// Its pathname ("/project") is what we want as the Vite base.
const gitlabPagesBase = process.env.CI_PAGES_URL
  ? new URL(process.env.CI_PAGES_URL).pathname
  : "/";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
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
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
