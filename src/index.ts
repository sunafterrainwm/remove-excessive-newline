interface SplitObject {
	text: string;
	skip: boolean;
}

function split( str: string ): SplitObject[] {
	const result: SplitObject[] = [];
	str.split( '\n' ).forEach( function ( s ) {
		result.push( {
			text: s,
			skip: false
		} );
	} );
	return result;
}

function merge( arr: SplitObject[] ): string {
	const result: string[] = [];
	arr.forEach( function ( { text, skip } ) {
		if ( skip ) {
			return;
		}
		result.push( text );
	} );
	return result.join( '\n' );
}

export = function ( str: string, maxContinuousNewLines = 1 ) {
	const obj = split( str );
	let count = 0;
	obj.forEach( function ( s ) {
		if ( s.text.replace( /[\s\r\t]/g, '' ) === '' ) {
			s.text = '';
			count++;
		} else {
			count = 0;
		}
		if ( count > maxContinuousNewLines ) {
			s.skip = true;
		}
	} );
	return merge( obj );
}
