export function createPetList() {
    const pets = []
    return function addPet(pet) {
        return pet? pets.push(pet): pets
    }
}