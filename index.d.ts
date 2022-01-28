interface RulePluginOptions {
  checkSchema?: boolean;
  runtimeModule?: string;
  moduleBaseDir?: string;
  esModule?: boolean;
}

declare function rule(options?: RulePluginOptions): unknown;
export = rule;
