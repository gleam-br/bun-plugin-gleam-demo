// gleam plugin
import gleam from "bun-plugin-gleam";

Bun.build({
  entrypoints: ["src/index.js", "src/relative/index.js"],
  outdir: "../dist",
  plugins: [gleam(
    {
      build: { force: true },
      log: { level: "info", time: true }
    }
  )]
});
