module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'prettier',
		'plugin:prettier/recommended'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'eslint-comments', 'jest', 'promise', 'import', 'prettier'],
	rules: {
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
		'import/prefer-default-export': 'off',
		'import/no-default-export': 'error',
		'no-use-before-define': [
			'error',
			{
				functions: false,
				classes: true,
				variables: true
			}
		],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-use-before-define': [
			'error',
			{
				functions: false,
				classes: true,
				variables: true,
				typedefs: true
			}
		],
		'import/no-extraneous-dependencies': 'off'
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2021,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	]
};
