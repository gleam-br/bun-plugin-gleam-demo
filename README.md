# 🎓 Demo: Bun plugin to gleam

Gleam build:

```sh
gleam clean
gleam build
```

Bun make:

```sh
bun make # or bun ./make.js
```

Bun test:

```sh
bun ./dist/index.js
# Hello from bun_plugin_gleam_demo!
```

## How this project was created

Gleam new:

```sh
gleam new bun_plugin_demo --skip-git --skip-github --template javascript
```

Bun init:

```sh
bun init -y
bun add --dev bun-plugin-gleam
```

Bun script `make.js`:

```js
import bunPluginGleam from "bun-plugin-gleam";

Bun.build({
    entrypoints: ["./index.js"],
    outdir: "./dist",
    plugins: [bunPluginGleam()]
});
```

Build:

```sh
gleam build
bun make
```

## ✅ Plugins

- [bun-plugin-gleam](https://github.com/gleam-br/bun-plugin-gleam)
- [vite-plugin-gleam](https://github.com/gleam-br/vite-plugin-gleam)

## 🧪 Demo

- [vite-plugin-gleam-demo](https://github.com/gleam-br/vite-plugin-gleam-demo)
- [vite-ts-plugin-gleam-demo](https://github.com/gleam-br/vite-ts-plugin-gleam-demo)

## Roadmap

- [ ] Demo: bun serve index.html using gleam lustre pkg.

```js
import gleam from "bun-plugin-gleam";

Bun.serve({
  port: 3000,
  plugins: [gleam({ log: "debug", force: true })],
  routes: {
    "/": function() {
      // TODO: How put lustre elements here?
      return new Response('Bun plugin gleam!');
    },
  }
});
```
