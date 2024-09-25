interface Employee {
    name:string;
    dept:string
}

interface Admin {
    isAdmin:boolean;
    level:number
}

type AdminEmployee = Employee & Admin

let admin:AdminEmployee = {
    name:'admin',
    dept:'tech',
    isAdmin:true,
    level:1
}

let unionType:string | number = 'unionType'; // union
console.log(unionType); // union type
unionType = 12;
console.log(unionType); // union type 
console.log(admin);
