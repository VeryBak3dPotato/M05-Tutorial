import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "https://github.com/VeryBak3dPotato/M05-Tutorial",
  plugins: [react()],
});
