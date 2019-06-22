class Person {
    constructor(name) {
        this.name = name;
    }

    show() {
        return `${this.name}です。`;
    }
}

class BusinessPerson extends Person {
    work() {
        return `${this.name}はマネージャーです。`;
    }
}

let bp = new BusinessPerson('Yamada');
console.log(bp.show());
console.log(bp.work());
