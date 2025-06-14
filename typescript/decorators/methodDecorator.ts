 function logMethod(target:any,propertyKey:string,descriptor:PropertyDescriptor){
    
    const originalMethod = descriptor.value;

    descriptor.value = function(...args:any[]){ // args we get original method arguments
        // here we written will execute while calling the function
        console.log(`Calculating ${propertyKey} method with ${args.join(",")}`)
        const res = originalMethod.apply(this,args); 
        console.log(res);
        return res;   
    }
}

class Calculator {
    @logMethod
    add(a:number,b:number){
       const res = a + b;
       return res;
    }
    
    @logMethod
    subtract(a:number,b:number){
       const res = a - b;
       return res;
    }
}

const calC = new Calculator();

calC.add(2,3);
calC.subtract(3,2);