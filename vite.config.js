import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target:
          mode === "development"
            ? "http://localhost:3000"
            : "https://bundelkhandexpo.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
}));
