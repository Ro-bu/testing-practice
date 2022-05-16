const analyzeArray = require("./analyzearray");

test("returns empty object for an empty array", () => {
    expect(analyzeArray([])).toStrictEqual({});
});
test("rounds average to 1 decimal", () => {
    expect(analyzeArray([10, 0, 0])).toStrictEqual({average: 3.3, min: 0, max: 10, length: 3})
});
test("returns correct answer 1", () => {
    expect(analyzeArray([2, 2, 2, 2])).toStrictEqual({average: 2, min: 2, max: 2, length: 4})
});
test("returns correct answer 2", () => {
    expect(analyzeArray([5, 1, 5, 2])).toStrictEqual({average: 3.2, min: 1, max: 5, length: 4})
});