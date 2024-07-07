import { it, describe, expect } from 'vitest'
import { sortString } from './q2';

describe('sortString', () => {
    it('should sort strings alphabetically', () => {
        const testString = ["TH19", "SG20", "TH2"];
        const expectedSorted = ["SG20", "TH19", "TH2"];
        expect(sortString(testString)).toEqual(expectedSorted);
    });

    it('should handle alphanumeric sorting', () => {
        const testString = ["TH10", "TH3Netflix", "TH1", "TH7"];
        const expectedSorted = ["TH1", "TH10", "TH3Netflix", "TH7"];
        expect(sortString(testString)).toEqual(expectedSorted);
    });

    it('should handle empty array', () => {
        const testString: string[] = [];
        const expectedSorted: string[] = [];
        expect(sortString(testString)).toEqual(expectedSorted);
    });
});