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
import rule from "./bar.rule";

rule.execute();
```

## Options

|                Name                 |        Type         |                   Default                    | Description                                                |
| :---------------------------------: | :-----------------: | :------------------------------------------: | :--------------------------------------------------------- |
|      **`checkSchema`**              |    `{Boolean}`      |                    `true`                    | Enables/disables the validation scheme for the rule files  |
|      **`runtimeModule`**            |    `{String}`       |         `'@ruleenginejs/runtime'`            | Runtime module name                                        |
|      **`moduleBaseDir`**            |    `{String}`       |                  `undefined`                 | Base path for import modules in rule files                 |
|        **`esModule`**               |    `{Boolean}`      |                    `true`                    | Enable/disable ES modules syntax                           |

## License

Licensed under the [MIT License](./LICENSE).
