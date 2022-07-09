export default function getRandomInteger(min: number, max: number) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new Error('Input have to be a number!');
  }
  if (min === Infinity || max === Infinity) {
    throw new Error('Input can not be infinity!');
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}
