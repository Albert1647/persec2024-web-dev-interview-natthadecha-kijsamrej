import { describe, it, expect } from 'vitest';
import { autocomplete, searchString, orderByFoundIndex } from './q4';

describe('searchString', () => {
    it('should filter strings based on search target', () => {
        const items = ["Mother", "Think", "Worthy", "Apple", "Android"];
        expect(searchString('th', items)).toEqual(['Mother', 'Think', 'Worthy']);
    });

    it('should handle case insensitivity', () => {
        const items = ["Mother", "Think", "Worthy", "Apple", "Android"];
        expect(searchString('TH', items)).toEqual(['Mother', 'Think', 'Worthy']);
    });

    it('should handle no matches', () => {
        const items = ["Uncle", "Day", "Monday", "Apple", "Android"];
        expect(searchString('xyz', items)).toEqual([]);
    });
});

describe('orderByFoundIndex', () => {
    it('should prioritize strings based on index of search target', () => {
        const items = ["Mother", "Think", "Worthy"];
        expect(orderByFoundIndex('th', items)).toEqual(['Think', 'Mother', 'Worthy']);
    });

    it('should handle case insensitivity', () => {
        const items = ["Mother", "Think", "Worthy"];
        expect(orderByFoundIndex('TH', items)).toEqual(['Think', 'Mother', 'Worthy']);
    });
});

describe('autocomplete', () => {
    it('should return maxResult number of autocomplete results', () => {
        const items = ["Mother", "Think", "Worthy", "Apple", "Android"];
        const result = autocomplete('th', items, 2);
        expect(result).toEqual(['Think', 'Mother']);
    });

    it('should handle fewer results than maxResult', () => {
        const items = ["Mother", "Think", "Worthy", "Apple", "Android"];
        const result = autocomplete('th', items, 5);
        expect(result).toEqual(['Think', 'Mother', 'Worthy',]);
    });

    it('should handle no matches', () => {
        const items = ["Mother", "Think", "Worthy", "Apple", "Android"];
        const result = autocomplete('xyz', items, 2);
        expect(result).toEqual([]);
    });
});
