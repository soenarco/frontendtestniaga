module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'airbnb-base',
  ],
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': [2, {
      'js': 'never',
      'vue': 'never'
    }],
    'max-len': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-param-reassign': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/no-v-html': 'off',
    'vue/html-indent': 'off',
    'vue/html-closing-bracket-newline': 'off',
  },
}
