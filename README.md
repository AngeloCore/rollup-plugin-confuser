# rollup-plugin-confuser

Obfuscate your project using [JS Confuser](https://github.com/MichaelXF/js-confuser).

## Installation

npm:

```console
npm i rollup-plugin-confuser -D
```

yarn:

```console
yarn add rollup-plugin-confuser -D
```

pnpm:

```console
pnpm add rollup-plugin-confuser -D
```

## Usage

```js
import confuser from "rollup-plugin-confuser";

export default {
  input: "src/index.js",
  output: {
    dir: "output",
    format: "cjs"
  },
  plugins: [
    confuser({
      global: false,
      include: ["src/index.js"]
    })
  ]
};
```

## Options

### `global`

Type: `boolean` <br>
Default: `true`

If set to `true` the plugin will obfuscate the whole project, including all the dependencies.

### `options`

Type: `boolean` <br>
Default: `true`

Custom js-confuser options, you can see all the available options in their [documentation](https://github.com/MichaelXF/js-confuser#options).

### `exclude`

Type: `String` | `Array[...String]`<br>
Default: `null`

A [picomatch pattern](https://github.com/micromatch/picomatch), or array of patterns, which specifies the files in the build the plugin should _ignore_. By default no files are ignored.

### `include`

Type: `String` | `Array[...String]`<br>
Default: `null`

A [picomatch pattern](https://github.com/micromatch/picomatch), or array of patterns, which specifies the files in the build the plugin should operate on. By default all files are targeted.

## Information

### Resources

- [Github](https://github.com/AngeloCore/rollup-plugin-confuser)
- [Rollup](https://rollupjs.org/)
- [JS Confuser](https://github.com/MichaelXF/js-confuser)

Made by [Angelo II](https://github.com/AngeloCore)

Copyright © (C) Angelo II, MIT license.
