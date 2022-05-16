function reverseString(str){
    if (typeof str === "string") {
        let stringArray = str.split("");
        let reversedString = stringArray.reverse().join("");
        return reversedString;
    } else {
        return str;
    }
};

module.exports = reverseString;