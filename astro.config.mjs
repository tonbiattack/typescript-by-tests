import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://tonbiattack.github.io",
  base: process.env.GITHUB_ACTIONS ? "/typescript-by-tests" : "/",
  output: "static",
});
