/* var */

var firstname           // Declaración y valor "undefined"
firstname = 'Oscar'
console.log(firstname)  // Oscar

var lastname = 'David'  // Declaración y asignación
lastname = 'John'       // Reasignar
console.log(lastname)   // John

var secondname = 'Ash'  // Declaración y asignación
var secondname = 'Paul' // Re-declaración y re-asignación
console.log(secondname) // Paul

/* let */

let fruit = 'Apple'         // Declaración y asignación
fruit = 'Wiki'              // Reasignar
console.log(fruit)          // Kiwi
//let fruit = 'Banana'      // ERROR Identifier 'fruit' has already been declared

/* const */

const animal = 'dog'        // Declaración y asignación
//animal = 'cat'            // ERROR Assignment to constant variable
//const animal = 'snake'    // ERROR Identifier 'animal' has already been declared

const vehicles = []         // Declaración y asignación
vehicles.push('Ford')
console.log(vehicles)       // ['Ford']
vehicles.pop()
console.log(vehicles)       // []


const singer = {
    name: 'Ciro'
}
singer.name = 'Sting'
console.log(singer)         // { name: 'Sting' }