describe('equality function', () => {
    test('should return true for same primitive values', () => {
        expect(equality(5, 5)).toBe(true);
        expect(equality('hello', 'hello')).toBe(true);
        expect(equality(undefined, undefined)).toBe(true);
    });

    test('should return false for different primitive values', () => {
        expect(equality(5, '5')).toBe(false);
        expect(equality('hello', 'world')).toBe(false);
        expect(equality(null, undefined)).toBe(false);
    });

    test('should return true for same object references', () => {
        const obj1 = {};
        const obj2 = obj1;
        expect(equality(obj1, obj2)).toBe(true);
    });

    test('should return false for different object references', () => {
        const obj1 = {};
        const obj2 = {};
        expect(equality(obj1, obj2)).toBe(false);
    });

    test('should return true for NaN', () => {
        expect(equality(NaN, NaN)).toBe(true);
    });

    test('should return false for -0 and +0', () => {
        expect(equality(0, -0)).toBe(false);
    });

    test('should return false for Infinity values', () => {
        expect(equality(Infinity, -Infinity)).toBe(false);
    });
});

function equality(a, b) {
    return a === b;
}
