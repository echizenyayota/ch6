var Animal = function(name) {
    this.name = name;
    this.toString = function() {
        return 'Animal: ' + this.name;
    };
};

var ani = new Animal('トクジロウ');
console.log(ani.name);
console.log(ani.toString());
