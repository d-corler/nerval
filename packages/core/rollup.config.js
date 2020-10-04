import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { eslint } from "rollup-plugin-eslint";

import pkg from './package.json';

const extensions = [
	'.js', '.ts'
];

export default {
	input: 'src/index.ts',
	output: [
		{
			//  TODO : remove rule
			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
			file: pkg.main,
			format: 'cjs',
		},
		{
			//  TODO : remove rule
			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
			file: pkg.module,
			format: 'es',
		}
	],
	plugins: [
		//  TODO : remove rule
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		eslint({
			throwOnError: true
		}),
		resolve( { extensions } ),
		babel( {
			extensions,
			babelHelpers: 'bundled',
			include: ['src/**/*'],
			rootMode: 'upward'
		} )
	]
};
