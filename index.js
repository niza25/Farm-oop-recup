const { Wheat, Crop, Sugarcane } = require('./crops');
const { Animals, Pig, Horse, Cow } = require('./animals');

class Farm {
    constructor(name) {
        this.name = name
        this.crops = []
        this.animals = []
    }

    addCrop(crop) {
        this.crops.push(crop)
    }
    calculateIncome() {
        return this.crops
            .map(crop => crop.getYieldInEuros())
            .concat(this.animals.map(animal => animal.getValueInEuros()))
            .reduce((acc, curr) => acc + curr, 0);
    }
    addAnimal(animal) {
        this.animals.push(animal);
    }
    printReport() {
        console.log(
            `----------------------
        - Farm: ${this.name}    - 
        - No. of crops: ${this.crops.length}  - 
        - No. of animals: ${this.animals.length}  - 
        - Total income: ${this.calculateIncome()}€ - 
        ----------------------`);
    }
}

class VeganFarm extends Farm {
    constructor(name) {
        super(name)
        this.isVegan = true
    }
}


module.exports = { Farm, VeganFarm };