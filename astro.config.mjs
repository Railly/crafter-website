import { defineConfig } from "astro/config";
import glsl from "vite-plugin-glsl";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server",
  vite: {
    plugins: [glsl()],
    build: {
      outDir: "dist",
      sourcemap: true
    }
  },
  adapter: vercel()
});