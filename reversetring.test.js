const reverseString = require("./reversestring");

test("Reverses the string", () => {
    expect(reverseString("Kakapepe")).toBe("epepakaK")
});
test("Does not crash with other data types 1", () => {
    expect(reverseString(false)).toBe(false)
});
test("Does not crash with other data types 2", () => {
    expect(reverseString(554)).toBe(554)
});