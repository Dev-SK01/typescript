"use strict";
class User {
    constructor(user) {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.age = user.age;
    }
    logUser() {
        console.log(this.firstName, this.lastName, this.age);
    }
}
const user = new User({ firstName: 'Munu', lastName: 'Saami', age: 20 });
const user2 = new User({ firstName: 'Munu', lastName: 'Saami', age: 21 });
user.logUser();
user2.logUser();
