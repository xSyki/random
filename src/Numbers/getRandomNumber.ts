export default function getRandomNumber(min: number, max: number, decimals: number = 0) {
  if (typeof min !== 'number' || typeof max !== 'number' || typeof decimals !== 'number') {
    throw new Error('Input have to be a number!');
  }
  if (min === Infinity || max === Infinity) {
    throw new Error('Input can not be infinity!');
  }
  if (decimals < 0 || decimals > 15) {
    throw new Error('Number of decimals can not be shorter than 0 and longer than 15!');
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  decimals = Math.floor(decimals);
  decimals = Math.pow(10, decimals);
  max *= decimals;
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min) / decimals;
  return randomNumber;
}
