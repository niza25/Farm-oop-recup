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
        let cropsValue = this.crops
            .map(crop => crop.getYieldInEuros())
            .reduce((acc, curr) => acc + curr, 0);
        let animalsValue = this.animals
            .map(animal => animal.getValueInEuros())
            .reduce((acc, curr) => acc + curr, 0);
        return cropsValue + animalsValue;

    }
    addAnimal(animal) {
        this.animals.push(animal);
    }
}

class VeganFarm extends Farm {
    constructor(name) {
        super(name)
        this.isVegan = true
    }
}

module.exports = { Farm, VeganFarm };

let myVegan = new VeganFarm('morty');
console.log(myVegan);