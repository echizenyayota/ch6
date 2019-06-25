const APP_NAME = 'JavaScript逆引きレシピ';

export function getTriangle(base, height) {
    return base * height / 2;
}

export class Person {
    constructor(name) {
        this.name = name;
    }

    show() {
        return `${this.name}です。`;
    }
}
