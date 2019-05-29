'use strict';

{
    const NAME = Symbol();
    const BIRTH = Symbol();

    export class Person {
        constructor (name, birth) {
            this[NAME] = name;
            this[BIRTH] = birth;
        }
    }

    getName() {
        return this[NAME];
    }

    getBirth() {
        return this[BIRTH];
    }

}
