"use strict";
// types number
var number = 1234;
var string = 'Im String';
var bool = true;
var object = { 1: 'hello', num: 2 };
var any = { num: 1 };
any = 'any';
// inferred types
var inferredType = { num: 1 };
//enums
var Direction;
(function (Direction) {
    Direction[Direction["Right"] = 0] = "Right";
    Direction[Direction["Left"] = 1] = "Left";
    Direction[Direction["Up"] = 2] = "Up";
    Direction[Direction["Down"] = 3] = "Down";
})(Direction || (Direction = {}));
function move(direction) {
    console.log(Direction[direction]);
}
move(Direction.Right);
function returnValue(num) {
    return num;
}
function multipleTypes(num, str) {
    return [num, str];
}
multipleTypes(1, "1");
