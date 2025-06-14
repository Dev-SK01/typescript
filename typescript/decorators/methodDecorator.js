var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logMethod(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // here we written will execute while calling the function
        console.log("Calculating ".concat(propertyKey, " method with ").concat(args.join(",")));
        var res = originalMethod.apply(this, args);
        console.log(res);
        return res;
    };
}
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        var res = a + b;
        return res;
    };
    Calculator.prototype.subtract = function (a, b) {
        var res = a - b;
        return res;
    };
    __decorate([
        logMethod
    ], Calculator.prototype, "add", null);
    __decorate([
        logMethod
    ], Calculator.prototype, "subtract", null);
    return Calculator;
}());
var calC = new Calculator();
calC.add(2, 3);
calC.subtract(3, 2);
