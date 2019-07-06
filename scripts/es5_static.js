var Util = function () {};

Util.VERSION = '1.0.0';

Util.getBmi = function(weight, height){
    return weight / (height * height);
};

console.log(Util.VERSION);
console.log(Util.getBmi(65, 1.81));
