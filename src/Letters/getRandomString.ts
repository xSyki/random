import alphabet from './Alphabet';

export default function getRandomString(length: number) {
  if (typeof length !== 'number') {
    throw new Error('Length of the string have to be a number!');
  }
  if (length < 0 || length === Infinity) {
    throw new Error('Length of the string can not be shorter than 0 and equal to infinity!');
  }
  let randomString = '';
  for (let i = 0; i < length; i++) {
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return randomString;
}
