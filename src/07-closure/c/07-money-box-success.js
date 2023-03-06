function moneyBox() {
    let saveCoins = 0
    return function addCoins(coins) {
        saveCoins += coins
        console.log(`MoneyBox: $${ saveCoins }`)
    } 
}


myMoneyBox = moneyBox()
myMoneyBox(5)       // MoneyBox: $5
myMoneyBox(7)       // MoneyBox: $12