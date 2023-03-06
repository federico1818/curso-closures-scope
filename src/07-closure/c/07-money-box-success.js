function moneyBox() {
    let saveCoins = 0
    return function addCoins(coins) {
        saveCoins += coins
        console.log(`MoneyBox: $${ saveCoins }`)
    } 
}


const myMoneyBox = moneyBox()
myMoneyBox(5)       // MoneyBox: $5
myMoneyBox(7)       // MoneyBox: $12

const moneyBoxJohn = moneyBox()
moneyBoxJohn(10)      // MoneyBox: $10
moneyBoxJohn(20)      // MoneyBox: $30
moneyBoxJohn(5)       // MoneyBox: $35