import bunPluginGleam from "bun-plugin-gleam";

Bun.build({
  entrypoints: ["./index.js"],
  outdir: "./dist",
  plugins: [bunPluginGleam()]
});
