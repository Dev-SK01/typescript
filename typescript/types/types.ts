// types number
var number: number = 1234;
var string: string = 'Im String';
var bool: boolean = true;
var object = { 1: 'hello', num: 2 };
var any: any = { num: 1 }
any = 'any';
// inferred types
var inferredType = { num: 1 }
//enums
enum Direction {
    Right,
    Left,
    Up,
    Down
}function move(direction) {
    console.log(Direction[direction]);
}
move(Direction.Right);

