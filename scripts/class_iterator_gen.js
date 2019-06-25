class MyArray {
    constructor(...values) {
        this.values = values;
    }

    *[Symbol.iterator]() {
        let i = 0;
        while ( i < this.values.length) {
            yield this.values[i++];
        }
    }
}

console.log(new MyArray());

let animals = new MyArray('cat', 'bird', 'elephant');
for (let animal of animals) {
    console.log(animal);
}
