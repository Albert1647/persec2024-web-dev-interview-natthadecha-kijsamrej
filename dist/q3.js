"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTextIndex = getTextIndex;
exports.getTextFromTextIndex = getTextFromTextIndex;
const alphabet = "abcdefghijklmnopqrstuvwxyz";
function getTextIndex(text) {
    let charIndex;
    let result = [];
    for (var i = 0; i < text.length; i++) {
        // lowercase text
        charIndex = text[i].toLowerCase();
        // find character position in alphabet
        if (alphabet.indexOf(charIndex) !== -1) {
            result.push(alphabet.length - alphabet.indexOf(charIndex));
        }
        else {
            throw "unknown alphabet";
        }
    }
    return result;
}
function getTextFromTextIndex(text) {
    let string = [];
    // Map TextIndex to Alphabet
    for (var i = 0; i < text.length; i++) {
        string.push(alphabet[text[i] - 1]);
    }
    return string;
}
class ReverseEncoder {
    encode(text) {
        // Split Text with white space
        let texts = text.split(" ");
        // Find text index
        let textIndex = texts.map(t => getTextIndex(t));
        let textReverse = textIndex.map(t => getTextFromTextIndex(t));
        // return the correct format
        return textReverse.map(t => t.join("")).flat().reverse().join(" ");
    }
    decode(text) {
        let texts = text.split(" ");
        // Find text index
        let textIndex = texts.map(t => getTextIndex(t).reverse());
        let textReverse = textIndex.map(t => getTextFromTextIndex(t));
        // return the correct format
        return textReverse.map(t => t.reverse().join("")).reverse().join(" ");
    }
}
let reverseEncoder = new ReverseEncoder();
let encodedText = reverseEncoder.encode("Hello World");
let decodedText = reverseEncoder.decode("dliow svool");
console.log("🚀 ~ encodedText:", encodedText);
console.log("🚀 ~ decodedText:", decodedText);
