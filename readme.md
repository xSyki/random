# @Syki/random
Library for generating random numbers, characters, letters, arrays of characters and numbers, and objects.

Made by Syki <mikolaj@syki.pl> (syki.pl)

[GitHub repositorie](https://github.com/xSyki/random)

[Npmjs](https://www.npmjs.com/package/@syki/random)

## To install:
```bash
npm i @syki/random
```


# Documentation

## getRandomInteger
```js
getRandomInteger(minValue, maxValue);
```
### Example:
```js
getRandomInteger(0, 9); // 3
```


## getRandomNumber
```js
getRandomNumber(minValue, maxValue, decimals?(default is 0));
```
### Example:
```js
getRandomNumber(0, 9, 2) // 1.19
```


## getRandomArrayNumber
```js
getRandomArrayNumber(minValue, maxValue, arrayLength)
```
### Example:
```js
getRandomArrayNumber(0, 5, 3); // [ 1, 3, 0 ]
```


## getRandomStringNumber
```js
getRandomStringNumber(stringLength)
```
### Example:
```js
getRandomStringNumber(5); // "07623"
```


## getRandomArrayStringNumber
```js
getRandomArrayStringNumber(minStringLength, arrayLength, maxStringLength?(by default is minStringValue))
```
### Example:
```js
getRandomArrayStringNumber(0, 3, 5); // [ '46746', '', '51638' ]
```


## getRandomLetter
```js
getRandomLetter()
```
### Example:
```js
getRandomLetter(); // g
```


## getRandomString
```js
getRandomString(stringLength);
```
### Example:
```js
getRandomString(5); // "agkzm"
```


## getRandomArrayLetters
```js
getRandomArrayLetters(stringLength, arrayLength, stringLength?(by default is stringValue));
```
### Example:
```js
getRandomArrayLetters(0, 3, 5); // [ 'mb', 'om', 'phlt' ]
```