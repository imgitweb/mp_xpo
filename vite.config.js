import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target:
          import.meta.env.MODE === "development"
            ? "http://localhost:3000"
            : "https://bundelkhandexpo.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
