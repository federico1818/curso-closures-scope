export function sumWithClosure(firstNum) {
    return function(secondNum = 0) {
        return firstNum + secondNum
    }
}