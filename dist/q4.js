"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autocomplete = autocomplete;
exports.searchString = searchString;
exports.orderByFoundIndex = orderByFoundIndex;
function autocomplete(search, items, maxResult) {
    // Find items that include 'search' string
    let findResult = searchString(search, items);
    let result = orderByFoundIndex(search, findResult);
    return result.slice(0, maxResult);
}
function searchString(stringTarget, stringList) {
    let regex = new RegExp(stringTarget, "i");
    let searchResult = stringList.filter(s => regex.test(s));
    return searchResult;
}
function orderByFoundIndex(stringTarget, stringList) {
    let priorityOrders = stringList.map(s => {
        return {
            text: s,
            index: s.toLocaleLowerCase().indexOf(stringTarget.toLocaleLowerCase())
        };
    });
    return priorityOrders.sort((a, b) => a.index - b.index).map(p => p.text);
}
let result = autocomplete("th", ["Mother", "Think", "Worthy", "Apple", "Android"], 2);
console.log("🚀 ~ result:", result);
