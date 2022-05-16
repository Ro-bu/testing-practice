function caesarCipher (str, shift) {
    let stringArray = str.split("");
    let newArray = [];
    stringArray.forEach((letter) => {
        if (letter.charCodeAt(0) >= "a".charCodeAt(0) && letter.charCodeAt(0) <= "z".charCodeAt(0)){
            newArray.push(shiftLowerCase(letter, shift));
        } else if (letter.charCodeAt(0) >= "A".charCodeAt(0) && letter.charCodeAt(0) <= "Z".charCodeAt(0)) {
            newArray.push(shiftUpperCase(letter,shift));
        } else {
            newArray.push(letter);
        }
    });
    return newArray.join("");
};

function shiftLowerCase (letter, shift) {
    const alphabetLength = 26;
    let newLetterCharCode = letter.charCodeAt(0) + shift;
    if (newLetterCharCode < "a".charCodeAt(0)) {
        newLetterCharCode += alphabetLength;
    } else if (newLetterCharCode > "z".charCodeAt(0)) {
        newLetterCharCode -= alphabetLength;
    }
    return String.fromCharCode(newLetterCharCode);
};

function shiftUpperCase (letter, shift) {
    const alphabetLength = 26;
    let newLetterCharCode = letter.charCodeAt(0) + shift;
    if (newLetterCharCode < "A".charCodeAt(0)) {
        newLetterCharCode += alphabetLength;
    } else if (newLetterCharCode > "Z".charCodeAt(0)) {
        newLetterCharCode -= alphabetLength;
    }
    return String.fromCharCode(newLetterCharCode);
};


module.exports = caesarCipher;