interface User{
    firstName: string;
    lastName: string;
    age?:number; // optional type
}

function logUser(user:User){
    console.log(user.firstName + user.lastName + user.age );
}
const user = {firstName:'Munu' , lastName:'Saami'}
const user2= {firstName:'Munu' , lastName:'Saami',age:21}

logUser(user);
logUser(user2)


