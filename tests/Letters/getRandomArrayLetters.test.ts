import { getRandomArrayLetters } from "../../index";

describe('Function - getRandomArrayLetters', () => {

    test('getRandomArrayLetters function exists', () => {
        expect(getRandomArrayLetters).toBeDefined();
        expect(typeof getRandomArrayLetters).toBe('function');

        const result = getRandomArrayLetters(10, 10);
        expect(Array.isArray(result)).toBe(true);
        result.map(element => {
            expect(typeof element).toBe('string');
        });
    });

    test('standart', () => {
        const result = getRandomArrayLetters(0, 10000, 10);

        expect(result.length).toBe(10000);

        result.map(element => {
            expect(element.length).toBeGreaterThanOrEqual(0);
            expect(element.length).toBeLessThanOrEqual(10);
        })
    })

    test('min = max', () => {
        const result = getRandomArrayLetters(10, 10000);
        result.map(element => {
            expect(element).toHaveLength(10);
        });

        const result2 = getRandomArrayLetters(10, 10000, 10);
        result2.map(element => {
            expect(element).toHaveLength(10);
        })
    })

    test('min > max', () => {
        const result = getRandomArrayLetters(10, 10000, 0);

        result.map(element => {
            expect(element.length).toBeGreaterThanOrEqual(0);
            expect(element.length).toBeLessThanOrEqual(10);
        })
    })

    test('Errors test', () => {
        expect(() => getRandomArrayLetters(10, 10, -10)).toThrow('Length can not be shorter than 0 and equal to infinity!')
        expect(() => getRandomArrayLetters(-10, 10, 10)).toThrow('Length can not be shorter than 0 and equal to infinity!')
        expect(() => getRandomArrayLetters(10, -10, 10)).toThrow('Length can not be shorter than 0 and equal to infinity!')
        expect(() => getRandomArrayLetters(0, Infinity, 10)).toThrow('Length can not be shorter than 0 and equal to infinity!')
        expect(() => getRandomArrayLetters(Infinity, 10, 10)).toThrow('Length can not be shorter than 0 and equal to infinity!')
        expect(() => getRandomArrayLetters(0, 10, Infinity)).toThrow('Length can not be shorter than 0 and equal to infinity!')
    });
})