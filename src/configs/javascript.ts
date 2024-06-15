import { Options } from "../types";
import { useName } from "../utils.js";
import { pluginUnusedImports } from "../plugins.js";
import globals from 'globals'

export function javascript(options: Options = {}) {
  const { overrides = {} } = options

  return [
    {
      name: useName('setup'),
      languageOptions: {
        ecmaVersion: 2022,
        globals: {
          ...globals.browser,
          ...globals.es2021,
          ...globals.node,
          document: 'readonly',
          navigator: 'readonly',
          window: 'readonly'
        },
        parserOptions: {
          ecmaFeatures: {
            // includes react js
            jsx: true,
          },
          ecmaVersion: 2022,
          sourceType: 'module',
        },
        sourceType: 'module',
      },
      linterOptions: {
        reportUnusedDisableDirectives: true,
      }
    },
    {
      name: useName('javascript', 'rules'),
      files: ['**/*.js'],
      plugins: {
        'unused-imports': pluginUnusedImports
      },
      rules: {
        'eqeqeq': ['error', 'smart'],
        'accessor-pairs': 'error',
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
        'constructor-super': 'error',
        'default-case-last': 'error',
        'dot-notation': 'error',
        'new-cap': ['error', { capIsNew: false, newIsCap: true, properties: true }],
        'no-alert': 'error',
        'no-eq-null': 'error',
        'no-caller': 'error',
        'no-debugger': 'error',
        'no-redeclare': 'error',
        'no-loss-of-precision': 'error',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-this-before-super': 'error',
        'no-throw-literal': 'error',
        'no-useless-call': 'error',
        'no-useless-rename': 'error',
        'no-useless-return': 'error',
        'no-var': 'error',
        'no-with': 'error',
        'no-useless-catch': 'error',
        'no-useless-escape': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-backreference': 'error',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'no-use-before-define': ['error', { classes: false, functions: false, variables: true }],
        'no-new-native-nonconstructor': 'error',
        'no-prototype-builtins': 'error',
        'no-proto': 'error',
        'no-promise-executor-return': 'error',
        'no-label-var': 'error',
        'no-lone-blocks': 'error',
        'no-lonely-if': 'error',
        'no-ex-assign': 'error',
        'no-irregular-whitespace': 'error',
        'no-empty': 'error',
        'no-iterator': 'error',
        'no-delete-var': 'error',
        'no-extra-bind': 'error',
        'no-extend-native': 'error',
        'no-extra-label': 'error',
        'no-fallthrough': 'error',
        'no-class-assign': 'error',
        'no-return-assign': 'error',
        'no-const-assign': 'error',
        'no-else-return': 'error',
        'no-empty-character-class': 'error',
        'no-empty-function': 'error',
        'no-empty-pattern': 'error',
        'no-empty-static-block': 'error',
        'no-constant-condition': 'error',
        'no-constructor-return': 'error',
        'no-setter-return': 'error',
        'no-async-promise-executor': 'error',
        'no-global-assign': 'error',
        'no-import-assign': 'error',
        'no-inner-declarations': 'error',
        'no-case-declarations': 'error',
        'no-array-constructor': 'error',
        'no-extra-boolean-cast': 'error',
        'no-restricted-globals': [
          'error',
          { message: 'Use `globalThis` instead.', name: 'global' },
          { message: 'Use `globalThis` instead.', name: 'self' },
        ],

        ...overrides
      },
    }
  ]
}