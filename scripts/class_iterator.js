class MyArray {
    constructor(...values) {
        this.values = values;
    }

    [Symbol.iterator]() {
        let i = 0;
        let that = this;
        return {
            next() {
                return i < that.values.length ?
                { done: false, value: that.values[i++]} :
                { done: true};
            }
        };
    }
}

let animals = new MyArray('panda', 'dog', 'rabbit');
for (let animal of animals) {
    console.log(animal);
}
