export function autocomplete(search: string, items: string[], maxResult: number) {
    // Find items that include 'search' string
    let findResult = searchString(search, items)
    let result = orderByFoundIndex(search, findResult)
    return result.slice(0, maxResult)
}

export function searchString(stringTarget: string, stringList: string[]) {
    let regex = new RegExp(stringTarget, "i");
    let searchResult = stringList.filter(s => regex.test(s))
    return searchResult
}

export function orderByFoundIndex(stringTarget: string, stringList: string[]) {
    let priorityOrders = stringList.map(s => {
        return {
            text: s,
            index: s.toLocaleLowerCase().indexOf(stringTarget.toLocaleLowerCase())
        }
    })
    return priorityOrders.sort((a, b) => a.index - b.index).map(p => p.text)
}

let result = autocomplete("th", ["Mother", "Think", "Worthy", "Apple", "Android"], 2)
console.log("🚀 ~ result:", result)
