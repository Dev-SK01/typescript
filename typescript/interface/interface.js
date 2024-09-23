function logUser(user) {
    console.log(user.firstName + user.lastName + user.age);
}
var user = { firstName: 'Munu', lastName: 'Saami' };
var user2 = { firstName: 'Munu', lastName: 'Saami', age: 21 };
logUser(user);
logUser(user2);
