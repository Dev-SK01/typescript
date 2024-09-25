var Generic = /** @class */ (function () {
    function Generic() {
        this.items = [];
    }
    Generic.prototype.push = function (item) {
        return this.items.push(item);
    };
    Generic.prototype.pop = function () {
        return console.log(this.items.pop());
        ;
    };
    return Generic;
}());
// generic class examples
var class1 = new Generic();
var class2 = new Generic();
// for number generic
class1.push(1);
class1.push(2);
class1.pop();
// for string generic
class2.push('hello');
class2.push('world');
class2.pop();
