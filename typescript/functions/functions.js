"use strict";
function tsFunctionAdd(param1, param2) {
    return console.log(param1 + param2);
}
function tsFunctionAddOptional(param1, param2, param3) {
    return console.log(param1 + param2);
    // here param3 is optional param
}
function tsFunctionAddDefault(param1, param2, param3 = 10) {
    return console.log(param1 + param2 + param3);
    // here param3 has default value
}
tsFunctionAdd(1, 2);
tsFunctionAddDefault(1, 2);
tsFunctionAddOptional(1, 2);
