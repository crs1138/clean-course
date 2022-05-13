export class Tesla {
    constructor(private numberOfSeats: number) {}

    getNumberOfTeslaSeats() {
        return this.numberOfSeats
    }
}

export class Audi {
    constructor(private numberOfSeats: number) {}

    getNumberOfAudiSeats() {
        return this.numberOfSeats
    }
}

export class Toyota {
    constructor(private numberOfSeats: number) {}

    getNumberOfToyotaSeats() {
        return this.numberOfSeats
    }
}

export class Honda {
    constructor(private numberOfSeats: number) {}

    getNumberOfHondaSeats() {
        return this.numberOfSeats
    }
}
