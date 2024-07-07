"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortString = sortString;
let testString = ["TH19", "SG20", "TH2"];
let testString2 = ["TH10", "TH3Netflix", "TH1", "TH7"];
// Sort Pattern not clear
function sortString(strings) {
    const collator = new Intl.Collator(undefined, { sensitivity: 'base' });
    let sortedArray = strings.sort(collator.compare);
    return sortedArray;
}
console.log(sortString(testString));
console.log(sortString(testString2));
