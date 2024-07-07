import { describe, it, expect } from 'vitest';
import { autocomplete, searchString, orderByFoundIndex } from './q4';

describe('searchString', () => {
  it('should filter strings based on search target', () => {
    const items = ["Mother", "Think", "Worthy", "Apple", "Android"];
    expect(searchString('th', items)).toEqual(['Think', 'Worthy']);
  });

  it('should handle case insensitivity', () => {
    const items = ["Mother", "Think", "Worthy", "Apple", "Android"];
    expect(searchString('TH', items)).toEqual(['Think', 'Worthy']);
  });

  it('should handle no matches', () => {
    const items = ["Mother", "Think", "Worthy", "Apple", "Android"];
    expect(searchString('xyz', items)).toEqual([]);
  });
});

describe('orderByFoundIndex', () => {
  it('should prioritize strings based on index of search target', () => {
    const items = ["Mother", "Think", "Worthy", "Apple", "Android"];
    expect(orderByFoundIndex('th', items)).toEqual(['Think', 'Worthy', 'Mother', 'Apple', 'Android']);
  });

  it('should handle case insensitivity', () => {
    const items = ["Mother", "Think", "Worthy", "Apple", "Android"];
    expect(orderByFoundIndex('TH', items)).toEqual(['Think', 'Worthy', 'Mother', 'Apple', 'Android']);
  });
});

describe('autocomplete', () => {
  it('should return maxResult number of autocomplete results', () => {
    const items = ["Mother", "Think", "Worthy", "Apple", "Android"];
    const result = autocomplete('th', items, 2);
    expect(result).toEqual(['Think', 'Worthy']);
  });

  it('should handle fewer results than maxResult', () => {
    const items = ["Mother", "Think", "Worthy", "Apple", "Android"];
    const result = autocomplete('th', items, 5);
    expect(result).toEqual(['Think', 'Worthy', 'Mother', 'Apple', 'Android']);
  });

  it('should handle no matches', () => {
    const items = ["Mother", "Think", "Worthy", "Apple", "Android"];
    const result = autocomplete('xyz', items, 2);
    expect(result).toEqual([]);
  });
});
