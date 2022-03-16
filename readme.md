# remove-excessive-newline
Remove excessive newlines from a string.

It will also clear a line if there is only have whitespace characters (`\s`, `\t`, `\r`, `\n`, `\v`, and `\f`).

## Installation
remove-excessive-newline is available in NPM by using command
```
npm install remove-excessive-newline
```

## Usage

``` javascript
const removeExcessiveNewline = require( 'remove-excessive-newline' );
const str = `
a
 
	
b
 

c`;
if ( removeExcessiveNewline( str, 1 ).trim().split( '\n' ).length === 5 ) {
	console.log( 'excessive newlines were removed!' );
}
```
