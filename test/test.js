/* global describe, it */
const assert = require( 'assert' );
const pkg = require( '../build/index' );

describe( 'require( \'remove-excessive-newline\' )', function () {
	it( 'should clean correct new line', function () {
		assert.equal( pkg( `
a


b
		
		
c`, 1 ).trim(), `
a

b

c`.trim() );
	} );
} );
