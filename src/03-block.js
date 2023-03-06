function fruits() {
    if(true) {
        var fruit1 = 'Apple'        // function scope
        let fruit2 = 'Kiwi'         // block scope
        const fruit3 = 'Banana'     // block scope
    }
    console.log(fruit1)
    //console.log(fruit2) // fruit2 is not defined
    //console.log(fruit3) // fruit3 is not defined
}

fruits()