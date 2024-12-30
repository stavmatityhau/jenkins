const calculateSum = (num1, num2) => {
    return num1 + num2;
};

describe('Calculator Tests', () => {
    test('Adding two numbers', () => {
        expect(calculateSum(5, 7)).toBe(12);
    });

    test('Adding negative numbers', () => {
        expect(calculateSum(-5, -3)).toBe(-8);
    });

    test('Adding zero', () => {
        expect(calculateSum(5, 0)).toBe(5);
    });
});
