import { getRandomLetter } from "../../index";
import alphabet from "../../src/Letters/Alphabet";

describe('Function - getRandomLetter', () => {
    test('getRandomLetter function exists', () => {
        expect(getRandomLetter).toBeDefined();
        expect(typeof getRandomLetter).toBe('function');
    });

    test('', () => {
        const result = getRandomLetter();
        expect(typeof result).toBe('string');
        expect(result).toHaveLength(1);
    })

    test('', () => {
        const result = getRandomLetter();
        expect(alphabet.includes(result)).toBeTruthy();
    })
})