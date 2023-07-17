module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    defineEmits: true,
    document: true,
    localStorage: true,
    GLOBAL_VAR: true,
    window: true,
    defineProps: true,
    defineExpose: true,
    withDefaults: true,
  },
  extends: [
    "./.eslintrc-auto-import.json",
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended", // 添加 prettier 插件
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint", "import"],
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }],
    "no-console": "off",
    "no-plusplus": "off",
    "no-param-reassign": "off",
    "import/extensions": "off",
    "no-use-before-define": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "no-underscore-dangle": "off", // 允许使用带有下划线的成员变量, this._foo 表明这是一个私有变量
    semi: "error",
    "linebreak-style": ["error", "unix"],
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "ignore",
      },
    ],
    "generator-star-spacing": "off",
    quotes: ["error", "double", { avoidEscape: true }],
    "space-before-function-paren": ["error", "never"],
    "no-unused-expressions": "off",
    "object-curly-spacing": ["error", "always"],
    "@typescript-eslint/no-unused-vars": "off",
    "arrow-parens": ["error", "always"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
