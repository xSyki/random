import alphabet from "./Alphabet.js";

export default function getRandomLetter() {
    return alphabet[Math.floor(Math.random()* alphabet.length)]
}