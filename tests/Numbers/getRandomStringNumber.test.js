import { getRandomStringNumber } from "../../index.js";

describe('Function - getRandomStringNumber', () => {

    test('getRandomArrayNumber function exists', () => {
        expect(getRandomStringNumber).toBeDefined();
        expect(typeof getRandomStringNumber).toBe('function');
        expect(typeof getRandomStringNumber(5)).toBe('string');
    });

    test('standart', () => {
        expect(getRandomStringNumber(5)).toHaveLength(5);
        expect(getRandomStringNumber(0)).toHaveLength(0);

        expect(typeof getRandomStringNumber(5)).toBe('string');
    });

    test('Errors test', () => {
        expect(() => getRandomStringNumber("dsa")).toThrow('Length of the string have to be a number!')
        expect(() => getRandomStringNumber([10])).toThrow('Length of the string have to be a number!')
        expect(() => getRandomStringNumber(Infinity)).toThrow('Length of the string can not be shorter than 0 and equal to infinity!')
        expect(() => getRandomStringNumber(-10)).toThrow('Length of the string can not be shorter than 0 and equal to infinity!')
    });
});