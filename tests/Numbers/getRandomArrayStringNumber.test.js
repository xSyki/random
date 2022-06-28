import { getRandomArrayStringNumber } from "../../index.js";

describe('Function - getRandomArrayStringNumber', () => {

    test('getRandomArrayNumber function exists', () => {
        expect(getRandomArrayStringNumber).toBeDefined();
        expect(typeof getRandomArrayStringNumber).toBe('function');

        const result = getRandomArrayStringNumber(0, 10, 10);
        expect(Array.isArray(result)).toBe(true);
        result.map(element => {
            expect(typeof element).toBe('string');
        });
    });

    test('standart', () => {
        const result = getRandomArrayStringNumber(10, 10);
        expect(result).toHaveLength(10);
        result.map(element => {
            expect(element).toHaveLength(10);
        })

        const result2 = getRandomArrayStringNumber(0, 10, 10);
        expect(result2).toHaveLength(10);
        result2.map(element => {
            expect(typeof element).toBe('string');
            expect(element.length).toBeGreaterThanOrEqual(0);
            expect(element.length).toBeLessThanOrEqual(10);
        })
    });

    test('min = max', () => {
        expect(getRandomArrayStringNumber(0, 2)).toStrictEqual(["", ""]);
        expect(getRandomArrayStringNumber(0, 2, 0)).toStrictEqual(["", ""]);

        const result = getRandomArrayStringNumber(10, 10, 10);

        result.map(element => {
            expect(element).toHaveLength(10);
        })
    });

    test('length = 0', () => {
        expect(getRandomArrayStringNumber(0, 0)).toStrictEqual([]);
        expect(getRandomArrayStringNumber(0, 0, 10)).toStrictEqual([]);
    });

    test('errors', () => {
        expect(() => getRandomArrayStringNumber("das", "dsa", "dsa")).toThrow('Input have to be a number!');
        expect(() => getRandomArrayStringNumber(0, 10, "das")).toThrow('Input have to be a number!');
        expect(() => getRandomArrayStringNumber()).toThrow('Input have to be a number!');
        expect(() => getRandomArrayStringNumber(0, 10, -10)).toThrow('Length can not be shorter than 0 and equal to infinity!');
        expect(() => getRandomArrayStringNumber(0, Infinity, Infinity)).toThrow('Length can not be shorter than 0 and equal to infinity!');
        expect(() => getRandomArrayStringNumber(Infinity, Infinity, Infinity)).toThrow('Length can not be shorter than 0 and equal to infinity!');
    });
});