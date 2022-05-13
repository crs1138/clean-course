import { Tesla, Audi, Toyota, Honda } from './03-liskov-b'

;(() => {
    const printCarSeats = (cars: (Tesla | Audi | Toyota | Honda)[]) => {
        for (const car of cars) {
            if (car instanceof Tesla) {
                console.log('Tesla', car.getNumberOfTeslaSeats())
                continue
            }
            if (car instanceof Audi) {
                console.log('Audi', car.getNumberOfAudiSeats())
                continue
            }
            if (car instanceof Toyota) {
                console.log('Toyota', car.getNumberOfToyotaSeats())
                continue
            }
            if (car instanceof Honda) {
                console.log('Honda', car.getNumberOfHondaSeats())
                continue
            }
        }
    }

    const cars = [new Tesla(7), new Audi(2), new Toyota(5), new Honda(5)]

    printCarSeats(cars)
})()
