import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/value": {
        target: "http://192.168.0.103:80/",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
