var Animal = function(name) {
    if (!(this instanceof Animal)) {
        return new Animal(name);
    }
    console.log(Animal);
    this.name = name;
    this.toString = function() {
        return 'Animal: ' + this.name;
    };
};

var ani = new Animal('トクジロウ');
console.log(ani.name);
console.log(ani.toString());
