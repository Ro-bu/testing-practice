const calculator = require("./calculator");

test("subtract works", () => {
    expect(calculator.subtract(10,7)).toBe(3);
});
test("add works",() => {
    expect(calculator.add(3,2)).toBe(5);
});
test("divide works", () => {
    expect(calculator.divide(21,3)).toBe(7);
});
test("multiply works", () => {
    expect(calculator.multiply(3,5)).toBe(15);
});