var Panda = function(name) {
    this.name = name;
};

console.log(Panda);
console.log(Panda.prototype);


Panda.prototype.toString = function() {
    return 'パンダの名前:' +  this.name;
}

var p = new Panda('彩浜');
console.log(p.name);
console.log(p.toString());
