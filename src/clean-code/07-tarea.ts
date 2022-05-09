;(() => {
    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input' | 'select' | 'textarea' | 'radio'

    class HtmlElement {
        constructor(public id: string, public type: HtmlType) {}
    }

    class Attributes {
        constructor(public value: string, public placeholder: string) {}
    }

    class Events {
        constructor() {}

        setFocus() {}
        getValue() {}
        isActive() {}
        removeValue() {}
    }

    //? Idea para la nueva clase InputElement

    class InputElement {
        public attributes: Attributes
        public element: HtmlElement
        public events: Events

        constructor(value: string, placeholder: string, id: string) {
            this.events = new Events()
            this.attributes = new Attributes(value, placeholder)
            this.element = new HtmlElement(id, 'input')
        }
    }

    const nameField = new InputElement(
        'Fernando',
        'Enter first name',
        'txtName'
    )

    console.log({ nameField })
})()
