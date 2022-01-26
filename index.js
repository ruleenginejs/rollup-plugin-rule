const { createFilter } = require('@rollup/pluginutils');
const schema = require('@ruleenginejs/schema');
const { generateCode } = require('@ruleenginejs/compiler');
const schemaValidator = schema(schema.SCHEMAS.PIPELINE);
const defaultRuntimeModule = '@ruleenginejs/runtime';

module.exports = function rule(options = {}) {
  const filter = createFilter(options.include || '**/*.rule', options.exclude);

  const checkSchema = options.checkSchema === undefined || !!options.checkSchema;
  const runtimeModule = options.runtimeModule || defaultRuntimeModule;

  return {
    name: 'rule',
    transform(code, id) {
      if (!filter(id)) {
        return;
      }

      const data = JSON.parse(code);

      if (checkSchema) {
        const isValid = schemaValidator(data);
        if (!isValid) {
          throw new Error(
            `Schema invalid: ${JSON.stringify(schemaValidator.errors)}`
          );
        }
      }

      const generatedCode = generateCode(data, {
        runtimeModule
      });

      return {
        code: generatedCode,
        map: { mappings: '' }
      }
    }
  }
};
