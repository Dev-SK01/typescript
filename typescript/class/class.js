var User = /** @class */ (function () {
    function User(user) {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.age = user.age;
    }
    User.prototype.logUser = function () {
        console.log(this.firstName, this.lastName, this.age);
    };
    return User;
}());
var user = new User({ firstName: 'Munu', lastName: 'Saami', age: 20 });
var user2 = new User({ firstName: 'Munu', lastName: 'Saami', age: 21 });
user.logUser();
user2.logUser();
