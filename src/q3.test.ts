import { it, describe, expect } from 'vitest'


import { getTextIndexReverse, getTextFromTextIndex, ReverseEncoder } from './q3';

describe('getTextIndex', () => {
    it('should return correct index for each character', () => {
        expect(getTextIndexReverse('abc')).toEqual([26, 25, 24]);
        expect(getTextIndexReverse('xyz')).toEqual([3, 2, 1]);
    });
});

describe('getTextFromTextIndex', () => {
    it('should return correct string from index array', () => {
        expect(getTextFromTextIndex([26, 25, 24])).toEqual(['z', 'y', 'x']);
        expect(getTextFromTextIndex([1, 2, 3])).toEqual(['a', 'b', 'c']);
    });
});

describe('ReverseEncoder', () => {
    const reverseEncoder = new ReverseEncoder();
    it('should encode and decode correctly', () => {
        const originalText = 'Hello World';
        const encodedText = reverseEncoder.encode(originalText);
        const decodedText = reverseEncoder.decode(encodedText);
        expect(encodedText).toEqual('dliow svool');
        expect(decodedText).toEqual(originalText.toLowerCase()); // Case insensitive
    });

});