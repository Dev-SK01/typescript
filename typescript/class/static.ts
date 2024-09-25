class Users {
    name:string;
    static totalUsers:number =0;
    constructor(name:string){
     this.name = name;
     Users.totalUsers++;
    }

    getName(){
        return console.log({name:this.name});
    }
    
    static getUsersCount(){
        return console.log({count:Users.totalUsers})
    }
}

const user1 = new Users('Dev');
user1.getName();
const user2= new Users('SK');
user2.getName();
Users.getUsersCount() // static fn call