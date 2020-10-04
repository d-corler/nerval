'use strict';

const { core } = require('../src/index');

describe('core', () => {
	it('run', () => {
		expect.hasAssertions()
		expect(core).toBeDefined();
	})
});
