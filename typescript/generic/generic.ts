class Generic<Type>{
    private items:Type[] = []

    push(item:Type){
       return this.items.push(item);
    }

    pop(){
        return console.log(this.items.pop());
        ;
    }
}

// generic class examples

const class1 = new Generic<number>();
const class2 = new Generic<string>();
// for number generic
class1.push(1);
class1.push(2);
class1.pop();

// for string generic
class2.push('hello');
class2.push('world');
class2.pop();



