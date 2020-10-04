const { pathsToModuleNameMapper } = require( 'ts-jest/utils' );
const { compilerOptions } = require( './tsconfig.base.json' );

module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleFileExtensions: ['js', 'ts'],
	moduleNameMapper: {
		...pathsToModuleNameMapper(
			compilerOptions.paths
		)
	}
};
