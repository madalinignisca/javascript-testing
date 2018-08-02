/**
 * @jest-environment node
 */

const difference = require('./difference');

test('substracting  3 from 7 must equal 4', () => {
    expect(difference(7, 3)).toBe(4);
});

test ('substracting 7.12 from 8.65 to be close to 1.53', () => {
    expect(difference(8.65, 7.12)).toBeCloseTo(1.53);
});
