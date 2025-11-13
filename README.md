# 🎓 Demo: Bun plugin to gleam

Gleam build:

```sh
gleam clean
gleam build
```

Bun make and test:

```sh
bun make.js
bun dist/index.js
```

## How this project was created

Gleam new:

```sh
gleam new bun_plugin_demo --skip-git --skip-github --template javascript
```

Bun init:

```sh
bun init -y
bun add bun-plugin-gleam
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

## 🧪 Demo

- [vite-plugin-gleam-demo](https://github.com/gleam-br/vite-plugin-gleam-demo)
