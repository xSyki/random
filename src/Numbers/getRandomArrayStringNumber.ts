export default function getRandomArrayStringNumber(
  minLength: number,
  arrayLength: number,
  maxLength: number = minLength,
) {
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

  const randomArray: string[] = [];

  for (let i = 0; i < arrayLength; i++) {
    let randomString = '';
    const stringLength = Math.floor(Math.random() * (maxLength - minLength + 1) + minLength);
    for (let b = 0; b < stringLength; b++) {
      randomString += Math.floor(Math.random() * 10);
    }
    randomArray.push(randomString);
  }
  return randomArray;
}
