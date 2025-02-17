import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "M05-Tutorial/tree/main/react-project",
  plugins: [react()],
});
