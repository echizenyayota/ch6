class Person {
    constructor(name) {
        this.name = name;
    }

    show() {
        return `${this.name}`;
    }
}

class BusinessPerson extends Person {
    constructor(name, title) {
        super(name);
        this.title = title;
    }
    show() {
        return `${super.show()}(${this.title})。`;
    }
}

let bp = new BusinessPerson('山田', '係長');
console.log(bp.show());
