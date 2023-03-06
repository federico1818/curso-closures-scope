const global = 0

function myFunction() {
    const number = 1
    console.log(global)

    function parent() {
        const inner = 2
        console.log(number, global)

        function child() {
            console.log(inner, number, global)
        }
        return child()
    }
    return parent()
}

myFunction()
