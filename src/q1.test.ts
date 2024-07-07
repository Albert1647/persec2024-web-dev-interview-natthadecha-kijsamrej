import { it, describe, expect } from 'vitest'

import { convertColorHexToRgb, convertHexToDecimalNumber, getRGB } from './q1'

describe('convertColorHexToRgb', () => {
    it('should convert 3-digit hex color to RGB', () => {
        expect(convertColorHexToRgb('#FFF')).toEqual({ r: 255, g: 255, b: 255 })
    })

    it('should convert 6-digit hex color to RGB', () => {
        expect(convertColorHexToRgb('#FF9933')).toEqual({ r: 255, g: 153, b: 51 })
    })

    it('should convert lowercase 6-digit hex color to RGB', () => {
        expect(convertColorHexToRgb('#ff9933')).toEqual({ r: 255, g: 153, b: 51 })
    })

    it('should throw an error for invalid color length', () => {
        expect(() => convertColorHexToRgb('#FFFF')).toThrow('invalid color')
    })

    it('should throw an error for invalid color characters', () => {
        expect(() => convertColorHexToRgb('#GGG')).toThrow('Invalid Base16')
    })
})

describe('convertHexToDecimalNumber', () => {
    it('should convert an array of hex strings to an rgbColor object', () => {
        expect(convertHexToDecimalNumber(['FF', '99', '33'])).toEqual({ r: 255, g: 153, b: 51 })
    })
})

describe('getRGB', () => {
    it('should convert a hex string to a decimal number', () => {
        expect(getRGB('FF')).toBe(255)
        expect(getRGB('99')).toBe(153)
        expect(getRGB('33')).toBe(51)
    })

    it('should throw an error for invalid base16 characters', () => {
        expect(() => getRGB('GG')).toThrow('Invalid Base16')
    })
})