var Wings = Wings || {};

Wings.Person = function(name, birth) {
    this.name = name;
    this.birth = birth;
};

Wings.Person.prototype.toString = function() {
    return this.name + '_ _' + this.birth;
}

var p = new Wings.Person('山田りお', new Date(1995, 11, 4));
console.log(p.toString());
