import { getRandomNumber } from "../../index.js";

describe('Function - getRandomNumber', () => {
    
    test('getRandomNumber function exists', () => {
        expect(getRandomNumber).toBeDefined();
        expect(typeof getRandomNumber).toBe('function');
        expect(typeof getRandomNumber(0, 9, 3)).toBe('number');
    })

    test('Positive Values', () => {
        const result = getRandomNumber(0, 3);
        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThanOrEqual(3);

        const result2 = getRandomNumber(0, 3, 3);
        expect(result2).toBeGreaterThanOrEqual(0);
        expect(result2).toBeLessThanOrEqual(3);

        const result3 = getRandomNumber(0.001, 0.999, 3).toString().split('.')[1].length

        expect(result3).toBeGreaterThanOrEqual(0);
        expect(result3).toBeLessThanOrEqual(3);
    })

    test('Negative values', () => {
        const result = getRandomNumber(-10, 0);
        expect(result).toBeGreaterThanOrEqual(-10);
        expect(result).toBeLessThanOrEqual(0);

        const result2 = getRandomNumber(-10, 0, 3);
        expect(result2).toBeGreaterThanOrEqual(-10);
        expect(result2).toBeLessThanOrEqual(0);

        const result3 = getRandomNumber(-0.999, -0.001, 3).toString().split('.')[1].length;
        expect(result3).toBeGreaterThanOrEqual(0);
        expect(result3).toBeLessThanOrEqual(3);
    })

    test('min = max', () => {
        expect(getRandomNumber(0, 0)).toBe(0);
        expect(getRandomNumber(0, 0, 0)).toBe(0);
        expect(getRandomNumber(0, 0, 3)).toBe(0);
    })

    test('min > max', () => {
        const result = getRandomNumber(10, 0, 3);
        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThanOrEqual(10);
    })

    test('Errors test', () => {
        expect(() => getRandomNumber()).toThrow('Input have to be a number!');
        expect(() => getRandomNumber("0", "10", "-10")).toThrow('Input have to be a number!');
        expect(() => getRandomNumber("das", "dsa", "dsb")).toThrow('Input have to be a number!');
        expect(() => getRandomNumber(0, 10, -10)).toThrow('Number of decimals can not be shorter than 0 and longer than 15!');
        expect(() => getRandomNumber(0, 10, 20)).toThrow('Number of decimals can not be shorter than 0 and longer than 15!');
        expect(() => getRandomNumber(0, Infinity)).toThrow('Input can not be infinity!');
        expect(() => getRandomNumber(Infinity, Infinity)).toThrow('Input can not be infinity!');
    })
});