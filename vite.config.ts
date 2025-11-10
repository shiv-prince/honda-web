import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true, // allows access from network
    strictPort: true,
    port: 5173,
    cors: true,
    hmr: {
      host: "6b12fd648715.ngrok-free.app",
      protocol: "wss",
    },
  },
});
