function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomNumber(min, max, decimals) {
    decimals = Math.pow(10, decimals);
    max *= decimals;
    const number = Math.floor(Math.random() * (max - min + 1) + min) / decimals;
    return number;
}

function getRandomArrayNumber(min, max, length) {
    const array = [];
    for(let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return array;
}

function getRandomStringNumber(length) {
    let string = "";
    for (let i = 0; i < length; i++) {
        string += Math.floor(Math.random() * 10)
    }
    return string;
}

function getRandomArrayStringNumber(minLength, arrayLength, maxLength = minLength) {
    const array = [];
    for(let i = 0; i < arrayLength; i++) {
        let string = "";
        const stringLength = Math.floor(Math.random() * (maxLength - minLength + 1) + minLength)
        for (let b = 0; b < stringLength; b++) {
            string += Math.floor(Math.random() * 10)
        }
        array.push(string);
    }
    return array;
}

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function getRandomLetter() {
    return alphabet[Math.floor(Math.random()* alphabet.length)]
}

function getRandomString(length) {
    let string = "";
    for (let i = 0; i < length; i++) {
        string += alphabet[Math.floor(Math.random() * alphabet.length)]
    }
    return string;
}

function getRandomArrayLetters(minLength, arrayLength, maxLength = minLength) {
    const array = [];
    for(let i = 0; i < arrayLength; i++) {
        let string = "";
        const stringLength = Math.floor(Math.random() * (maxLength - minLength + 1) + minLength)
        for (let b = 0; b < stringLength; b++) {
            string += alphabet[Math.floor(Math.random() * alphabet.length)]
        }
        array.push(string);
    }
    return array;
}

export {
    getRandomInteger,
    getRandomNumber,
    getRandomArrayNumber,
    getRandomStringNumber,
    getRandomArrayStringNumber,
    getRandomLetter,
    getRandomString,
    getRandomArrayLetters
}