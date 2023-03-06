// Variables

var a           // Declaración
var b = 'b'     // Declaración y asignación
b = 'bb'        // Reasignación
var a = 'aa'    // Redeclaración

// Global Scope

var fruit = 'Apple'     // Global

function bestFruit() {
    console.log(fruit)
}

bestFruit()
console.log(fruit)

function countries() {
    country = 'Colombia' // global
    console.log(country)
}

countries()
console.log(country)