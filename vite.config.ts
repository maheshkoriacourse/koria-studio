import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages project site: /koria-studio/ base
export default defineConfig({
  base: "/koria-studio/",
  plugins: [react(), tailwindcss()],
});