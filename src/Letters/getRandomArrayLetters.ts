import alphabet from './Alphabet';

export default function getRandomArrayLetters(minLength: number, arrayLength: number, maxLength: number = minLength) {
  if (typeof minLength !== 'number' || typeof maxLength !== 'number' || typeof arrayLength !== 'number') {
    throw new Error('Input have to be a number!');
  }
  if (
    minLength < 0 ||
    minLength === Infinity ||
    maxLength < 0 ||
    maxLength === Infinity ||
    arrayLength < 0 ||
    arrayLength === Infinity
  ) {
    throw new Error('Length can not be shorter than 0 and equal to infinity!');
  }

  if (minLength > maxLength) {
    [minLength, maxLength] = [maxLength, minLength];
  }

  const array: string[] = [];
  for (let i = 0; i < arrayLength; i++) {
    let randomString = '';
    const stringLength = Math.floor(Math.random() * (maxLength - minLength + 1) + minLength);
    for (let b = 0; b < stringLength; b++) {
      randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    array.push(randomString);
  }
  return array;
}
