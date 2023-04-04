class Player{

    constructor(location, name) {
        this.location = location;
        this.name = name;
        this.numberLocations = 40;
    }

    move(diceValue){
        this.location = (this.location + diceValue) % this.numberLocations;
        return this.location;
    }
}

module.exports = Player