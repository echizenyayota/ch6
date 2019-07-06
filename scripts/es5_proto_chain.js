var Person = function() {};

Person.prototype = {
    eat: function() {
        console.log('もぐもぐと食べる');
    }
};

var  BusinessPerson = function() {
    Person.call(this);
};

BusinessPerson.prototype = new Person();

BusinessPerson.prototype.work = function() {
    console.log('せっせ、せっせと働く');
};

var bp = new BusinessPerson();
bp.eat();
bp.work();
