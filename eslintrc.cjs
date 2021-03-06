/* eslint-disable quote-props, array-bracket-spacing */
module.exports = {
  env: {
    browser:            true,
    "jest/globals":     true,
    es2020:             true,
  },
  extends: [
    'airbnb-base',
    "plugin:jest/all",
    "plugin:chai-expect/recommended",
    "plugin:chai-friendly/recommended",
  ],
  globals: {
    Atomics:            'readonly',
    SharedArrayBuffer:  'readonly',
    expect:             'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      "experimentalObjectRestSpread": true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins:              [
    "jest",
    "chai-expect",
    "chai-friendly",
  ],
  rules: {
    "comma-dangle":                     1,
    "default-param-last":               2,
    "func-style":                       [ "error", "declaration", { "allowArrowFunctions": true } ],
    "import/extensions":                [ 2, "never" ],
    "generator-star-spacing":           ["warn", { before: true, after: true }],
    "import/no-extraneous-dependencies": [2, { devDependencies: ['test/**/*.*', 'scripts/**/*.*', '**/codegen/*.*'] }],
    "indent":                           [ "warn",  2 ],
    "linebreak-style":                  [ "error", "unix" ],
    "max-len":                          [ "warn", { "code": 120 }],
    "no-console":                       [ "warn", { allow: ["warn", "error"] } ],
    "no-constructor-return":            2,
    "no-dupe-else-if":                  2,
    "no-else-return":                   1,
    "no-implicit-coercion":             2,
    "no-implicit-globals":              2,
    "no-multiple-empty-lines":          1,
    "no-native-reassign":               2,
    "no-negated-condition":             2,
    "no-trailing-spaces":               1,
    "no-unused-vars":                   [ "warn", { "varsIgnorePattern": "^(_|say)", argsIgnorePattern: "^_" }],
    "semi":                             [ "warn",  "never" ],
    "space-unary-ops":                  [ "warn",  { "overrides": { "!": true } } ],
    //
    "camelcase":                        0,
    "class-methods-use-this":           0,
    "import/no-named-as-default":       0,
    "import/no-named-as-default-member": 0,
    "import/no-useless-path-segments":  0,
    "key-spacing":                      0,
    "no-await-in-loop":                 0,
    "no-continue":                      0,
    "no-multi-spaces":                  0,
    "no-restricted-syntax":             0,
    "no-underscore-dangle":             0,
    "no-use-before-define":             0,
    "no-useless-rename":                0,
    "no-useless-escape":                0,
    "object-curly-newline":             0,
    "object-property-newline":          0,
    "padded-blocks":                    0,
    "quotes":                           0,
    "jest/prefer-expect-assertions":    0,
    "jest/valid-expect":                0,
    "jest/lowercase-name":              0,
  },
}
