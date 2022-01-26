# @ruleenginejs/rollup-plugin-rule

> Compile rule files to javascript.

## Installation

```bash
npm install -D @ruleenginejs/rollup-plugin-rule
```

### Add Runtime

```bash
npm install @ruleenginejs/runtime
```

## Usage

### Config

```js
// rollup.config.js
import rule from '@ruleenginejs/rollup-plugin-rule';

export default {
  input: './main.js',
  plugins: [
    rule()
  ]
}
```

```js
// main.js
import bar from "./bar.rule";

bar.execute();
```

## License

Licensed under the [MIT License](./LICENSE).
