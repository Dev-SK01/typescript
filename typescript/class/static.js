var Users = /** @class */ (function () {
    function Users(name) {
        this.name = name;
        Users.totalUsers++;
    }
    Users.prototype.getName = function () {
        return console.log({ name: this.name });
    };
    Users.getUsersCount = function () {
        return console.log({ count: Users.totalUsers });
    };
    Users.totalUsers = 0;
    return Users;
}());
var user1 = new Users('Dev');
user1.getName();
var user2 = new Users('SK');
user2.getName();
Users.getUsersCount();
