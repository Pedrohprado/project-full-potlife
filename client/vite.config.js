import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/potlife": {
        target: "https://api-pintura-comun.onrender.com/",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
