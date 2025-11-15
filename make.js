
import gleam from "bun-plugin-gleam";

Bun.build({
  entrypoints: ["./index.js"],
  outdir: "./dist",
  plugins: [gleam(
    {
      build: { force: true },
      log: { level: "debug", time: true }
    }
  )]
});
