function tsFunctionAdd(param1:number,param2:number){
    return console.log(param1 + param2);
}

function tsFunctionAddOptional(param1:number,param2:number , param3?:number){
    return console.log(param1 + param2 );
}

function tsFunctionAddDefault(param1:number,param2:number , param3:number = 10){
    return console.log(param1 + param2 + param3);
}

tsFunctionAdd(1,2);
tsFunctionAddDefault(1,2);
tsFunctionAddOptional(1,2)

