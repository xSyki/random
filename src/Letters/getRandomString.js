import alphabet from "./Alphabet.js";

export default function getRandomString(length) {
    if(typeof length !== 'number') {
        throw 'Length of the string have to be a number!'
    }
    if(length < 0 || length === Infinity) {
        throw 'Length of the string can not be shorter than 0 and equal to infinity!';
    }
    let string = "";
    for (let i = 0; i < length; i++) {
        string += alphabet[Math.floor(Math.random() * alphabet.length)]
    }
    return string;
}