/**
 * @jest-environment node
 */

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test ('adds 7.12 + 8.65 to be equal to 15.77', () => {
    expect(sum(7.12, 8.65)).toBeCloseTo(15.77);
});