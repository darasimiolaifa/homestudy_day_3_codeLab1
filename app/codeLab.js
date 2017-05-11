'use strict';

module.exports = {

	reverseString : (aString) => {

		let newString = '';

		if(aString.length === 0) {

			return null;
		}

		for(let counter = aString.length - 1; counter >= 0; counter -= 1) {

			newString += aString[counter];
		}

		if(newString == aString) {

			return true;
		}

		return newString;
	}
}