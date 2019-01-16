const { Wheat, Crop, Sugarcane } = require('./crops');

class Farm {
    constructor(name) {
        this.name = name,
            this.crops = []
    }
    addCrop(crop) {
        this.crops.push(crop)
    }
    calculateIncome() {
        return this.crops
            .map(crop => crop.getYieldInEuros())
            .reduce((acc, curr)=> acc + curr, 0);
    }
}

module.exports.Farm = Farm;