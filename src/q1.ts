type rgbColor = {
    r: number,
    g: number,
    b: number
}

type color = string

export const HEX_MAP = new Map()

let map = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "A": 10,
    "B": 11,
    "C": 12,
    "D": 13,
    "E": 14,
    "F": 15,
}

for (const [key, value] of Object.entries(map)) {
    HEX_MAP.set(key, value)
}


export function convertColorHexToRgb(hexString: color) {
    let colorString = hexString.split("#")[1]
    if (colorString.length !== 3 && colorString.length !== 6) {
        throw "invalid color"
    }
    let result
    if (colorString.length == 3) {
        result = convertHexToDecimalNumber(
            [
                `${colorString[0]}${colorString[0]}`,
                `${colorString[1]}${colorString[1]}`,
                `${colorString[2]}${colorString[2]}`,
            ]
        )
    }
    if (colorString.length == 6) {
        result = convertHexToDecimalNumber(
            [
                `${colorString[0]}${colorString[1]}`,
                `${colorString[2]}${colorString[3]}`,
                `${colorString[4]}${colorString[5]}`,
            ]
        )
    }
    return result
}

export function convertHexToDecimalNumber(string: string[]): rgbColor {
    let rgbArray = string.map(el => getRGB(el))
    return {
        r: rgbArray[0],
        g: rgbArray[1],
        b: rgbArray[2],
    }
}

export function getRGB(string: string): number {
    // Extract base16 string
    let first = string[0]
    let second = string[1]
    // Check if base16 character is valid
    if (!HEX_MAP.has(first.toUpperCase()) || !HEX_MAP.has(second.toUpperCase())) {
        throw "Invalid Base16"
    }
    let firstVal = HEX_MAP.get(first.toUpperCase())
    let secondVal = HEX_MAP.get(second.toUpperCase())
    // Convert two number of base16 to base 10 
    let result = (firstVal * Math.pow(16, 1)) + (secondVal * Math.pow(16, 0))
    return result
}

console.log("RGB Result: ", convertColorHexToRgb("#FFF"))
console.log("RGB Result: ", convertColorHexToRgb("#FF9933"))
console.log("RGB Result: ", convertColorHexToRgb("#ff9933"))
console.log("RGB Result: ", convertColorHexToRgb("#000"))
