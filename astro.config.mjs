import { defineConfig } from "astro/config";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  site: "https://alzologisticacba.github.io",
  base: isProd ? "/alzo-landing/" : "/", // <-- clave: en dev NO hay base, en prod SÍ (con / final)
});