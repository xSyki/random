import alphabet from "../../src/Letters/Alphabet";

describe('Alphabet', () => {
    test('alphabet array exists', () => {
        expect(alphabet).toBeDefined();
        for (let i = 0; i < alphabet.length; i++) {
            expect(typeof alphabet[i]).toBe('string');
            expect(alphabet[i]).toHaveLength(1);
        }
    })
})