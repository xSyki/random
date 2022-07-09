import alphabet from "./Alphabet";

export default function getRandomLetter() {
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}