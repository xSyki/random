@Syki/random
Library for generating random numbers, characters, letters, arrays of characters and numbers, and objects.
Made by Syki <mikolaj@syki.pl> (syki.pl)

[GitHub repositorie](https://github.com/xSyki/random)
[Npmjs](https://www.npmjs.com/package/@syki/random)

To intsall:
npm i @syki/random

getRandomInteger(minValue, maxValue)
Example:
getRandomInteger(0, 9)
return 0 | 1 | ... | 9

getRandomNumber(minValue, maxValue, decimals?(default is 0))
Example:
getRandomNumber(0, 9, 2)
return 0.76 | 1.19 | ... | 9

getRandomArrayNumber(minValue, maxValue, arrayLength)
Example:
getRandomArrayNumber(0, 5, 3)
return [ 1, 3, 0 ]

getRandomStringNumber(stringLength)
Example:
getRandomStringNumber(5)
return "07623"

getRandomArrayStringNumber(stringLength, arrayLength, stringLength?(by default is stringValue))
Example:
getRandomArrayStringNumber(0, 3, 5)
return [ '46746', '', '51638' ]

getRandomLetter()
Example:
getRandomLetter()
return a | b | ... | z

getRandomString(stringLength)
Example:
getRandomString(5)
return "agkzm"

getRandomArrayLetters(stringLength, arrayLength, stringLength?(by default is stringValue))
Example:
getRandomArrayLetters(0, 3, 5)
return [ 'mb', 'om', 'phlt' ]