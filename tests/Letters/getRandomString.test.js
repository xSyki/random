import { getRandomString } from "../../index.js";

describe('Function - getRandomString', () => {
    test('getRandomString function exists', () => {
        expect(getRandomString).toBeDefined();
        expect(typeof getRandomString).toBe('function');
    });

    test('standart', () => {
        const result = getRandomString(10)
        expect(typeof result).toBe('string');
        expect(result).toHaveLength(10);
    })

    test('Errors', () => {
        expect(() => getRandomString("10")).toThrow('Length of the string have to be a number!')
        expect(() => getRandomString(-10)).toThrow('Length of the string can not be shorter than 0 and equal to infinity!')
    })
})