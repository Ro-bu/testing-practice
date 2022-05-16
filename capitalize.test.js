const capitalize = require("./capitalize");

test("Uppercases the first letter", () => {
    expect(capitalize("seeneke")).toBe("Seeneke")
});
test("Works with empty string", () => {
    expect(capitalize("")).toBe("")
});
test("Does not crash with other data types 1", () => {
    expect(capitalize(null)).toBe(null)
});
test("Does not crash with other data types 2", () => {
    expect(capitalize(2)).toBe(2)
});

