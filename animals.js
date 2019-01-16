class Animals {
    constructor(ageInDays) {
        this.age = ageInDays
    }
    getValueInEuros() {
        return this.price * this.getWeightInKg()
    }
}

class Pig extends Animals {
    constructor(ageInDays) {
        super(ageInDays),
            this.price = 4
    }
    getWeightInKg() {
        return Math.min(this.age * 2.3, 700);
    }
}

class Cow extends Animals {
    constructor(ageInDays) {
        super(ageInDays),
            this.price = 5
    }
    getWeightInKg() {
        return Math.min(this.age * 1.5, 1200)
    }
}

class Horse extends Animals {
    constructor(ageInDays) {
        super(ageInDays),
            this.price = 10
    }
    getWeightInKg() {
        return Math.min(this.age * 1.7, 1000)
    }
}

module.exports = { Animals, Pig, Cow, Horse};