function tsFunctionAdd(param1:number,param2:number){
    return console.log(param1 + param2);
}

function tsFunctionAddOptional(param1:number,param2:number , param3?:number){
    return console.log(param1 + param2 );
    // here param3 is optional param
}

function tsFunctionAddDefault(param1:number,param2:number , param3:number = 10){
    return console.log(param1 + param2 + param3);
    // here param3 has default value
}

tsFunctionAdd(1,2);
tsFunctionAddDefault(1,2);
tsFunctionAddOptional(1,2)

