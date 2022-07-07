// #7DaysOfCode - Lógica JS 5/7: Remoção de Arrays

let listBuy = {
    Fruit: [
        'banana',
        'aple',
        'orange'
    ],
    Freeze: [
        'pizza',
        'ice cream',
        'lasagna',
    ],
}

console.log(listBuy)

delete listBuy.Fruit[1]
console.log(listBuy)

delete listBuy.Fruit
console.log(listBuy)

delete listBuy.Freeze
console.log(listBuy)
