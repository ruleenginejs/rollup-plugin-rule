const { rollup } = require('rollup');
const path = require('path');
const rule = require('../');

const fixturesDir = path.resolve(__dirname, 'fixtures');

describe('rollup-plugin-rule', () => {
  it('should output compiled rule in es module', async () => {
    const output = await build('basic.js');
    expect(output).toMatchSnapshot();
  });

  it('should throw error when bad rule schema', async () => {
    expect.assertions(1);
    let message = null;
    try {
      await build('bad-schema.js');
    } catch (e) {
      message = e.message;
    }
    expect(message).toMatchSnapshot();
  });
});

async function build(file) {
  const bundle = await rollup({
    input: path.join(fixturesDir, file),
    external: ["@ruleenginejs/runtime"],
    plugins: [
      rule()
    ]
  });
  const { output } = await bundle.generate({ format: 'cjs' });
  return output[0].code;
}
