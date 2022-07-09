export default function getRandomArrayNumber(min: number, max: number, length: number) {
  if (typeof min !== 'number' || typeof max !== 'number' || typeof length !== 'number') {
    throw new Error('Input have to be a number!');
  }
  if (min === Infinity || max === Infinity || length === Infinity) {
    throw new Error('Input can not be infinity!');
  }
  if (length < 0) {
    throw new Error('Length of the array can not be shorter than 0!');
  }
  if (min > max) {
    [min, max] = [max, min];
  }

  const randomArray: number[] = [];

  for (let i = 0; i < length; i++) {
    randomArray.push(Math.floor(Math.random() * (max - min + 1) + min));
  }
  return randomArray;
}
