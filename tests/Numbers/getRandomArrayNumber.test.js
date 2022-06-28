import { getRandomArrayNumber } from "../../index.js";

describe('Function - getRandomArrayNumber', () => {

    test('getRandomArrayNumber function exists', () => {
        expect(getRandomArrayNumber).toBeDefined();
        expect(typeof getRandomArrayNumber).toBe('function');

        const result = getRandomArrayNumber(0, 10, 10);
        expect(Array.isArray(result)).toBe(true);
        result.map(element => {
            expect(typeof element).toBe('number');
        });
    });

    test('positive values', () => {
        const result = getRandomArrayNumber(0, 10, 10);

        expect(result).toHaveLength(10);

        result.map(element => {
            expect(element).toBeGreaterThanOrEqual(0);
            expect(element).toBeLessThanOrEqual(10);
        })
    });

    test('Negative values', () => {
        const result = getRandomArrayNumber(-10, 0, 10);

        expect(result).toHaveLength(10);

        result.map(element => {
            expect(element).toBeGreaterThanOrEqual(-10);
            expect(element).toBeLessThanOrEqual(0);
        })
    });

    test('min > max', () => {
        const result = getRandomArrayNumber(10, 0, 10);

        result.map(element => {
            expect(element).toBeGreaterThanOrEqual(0);
            expect(element).toBeLessThanOrEqual(10);
        });
    });

    test('min = max', () => {
        expect(getRandomArrayNumber(0, 0, 2)).toStrictEqual([0, 0]);
    });

    test('length = 0', () => {
        expect(getRandomArrayNumber(0, 0, 0)).toStrictEqual([]);
        expect(getRandomArrayNumber(0, 10, 0)).toStrictEqual([]);
    });

    test('errors', () => {
        expect(() => getRandomArrayNumber("das", "dsa", "dsa")).toThrow('Input have to be a number!');
        expect(() => getRandomArrayNumber(0, 10, "das")).toThrow('Input have to be a number!');
        expect(() => getRandomArrayNumber()).toThrow('Input have to be a number!');
        expect(() => getRandomArrayNumber(0, 10, -10)).toThrow('Length of the array can not be shorter than 0!');
        expect(() => getRandomArrayNumber(0, Infinity, Infinity)).toThrow('Input can not be infinity!');
        expect(() => getRandomArrayNumber(Infinity, Infinity, Infinity)).toThrow('Input can not be infinity!');
    });
});