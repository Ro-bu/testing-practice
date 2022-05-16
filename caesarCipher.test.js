const caesarCipher = require("./caesarCipher");

test("wraps from z to a", () => {
    expect(caesarCipher("Zaooza", 1)).toBe("Abppab")
});
test("wraps from a to z", () => {
    expect(caesarCipher("Zaooza", -1)).toBe("Yznnyz")
});
test("keeps case", () => {
    expect(caesarCipher("AbCd", 1)).toBe("BcDe")
});
test("ignores punctuation", () => {
    expect(caesarCipher("a...b!!", 1)).toBe("b...c!!")
});