;(() => {
    type Gender = 'M' | 'F'

    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) {}
    }

    const newPerson = new Person('Fernand', 'M', new Date('1985-10-21'))
    console.log({ newPerson })
})()
