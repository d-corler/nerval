module.exports = {
	root: true,
	env: {
		es6: true,
		node: true
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.eslint.json', './example/tsconfig.json', './packages/*/tsconfig.json'],
		warnOnUnsupportedTypeScriptVersion: false
	},
	plugins: [
		'@typescript-eslint',
		'jest'
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking'
	],
	overrides: [
		{
			files: [
				'packages/*/tests/**/*.test.ts',
				'packages/*/tests/**/*.spec.ts',
			],
			env: {
				'jest/globals': true,
			}
		},
		{
			files: [
				'jest.config.js',
			],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
				'@typescript-eslint/no-unsafe-assignment': 'off',
				'@typescript-eslint/no-unsafe-member-access': 'off'
			}
		}
	]
};
