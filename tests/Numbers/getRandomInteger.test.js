import { getRandomInteger } from "../../index.js";

describe('Function - getRandomInteger', () => {
    
    test('getRandomInteger function exists', () => {
        expect(getRandomInteger).toBeDefined();
        expect(typeof getRandomInteger).toBe('function');
        expect(typeof getRandomInteger(0, 9)).toBe('number');
    })

    test('Positive Values', () => {
        const result = getRandomInteger(0, 3)
        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThanOrEqual(3);
    })

    test('Negative values', () => {
        const result = getRandomInteger(-10, 0);
        expect(result).toBeGreaterThanOrEqual(-10);
        expect(result).toBeLessThanOrEqual(0);
    })

    test('min > max', () => {
        const result = getRandomInteger(10, 0)
        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThanOrEqual(10);
    })

    test('min = max', () => {
        expect(getRandomInteger(0, 0)).toBe(0);
        expect(getRandomInteger(5, 5)).toBe(5);
    })

    test('Errors test', () => {
        expect(() => getRandomInteger()).toThrow('Input have to be a number!');
        expect(() => getRandomInteger("das")).toThrow('Input have to be a number!');
        expect(() => getRandomInteger("das", "dsa")).toThrow('Input have to be a number!');
        expect(() => getRandomInteger(0, Infinity)).toThrow('Input can not be infinity!');
        expect(() => getRandomInteger(Infinity, Infinity)).toThrow('Input can not be infinity!');
    })
});