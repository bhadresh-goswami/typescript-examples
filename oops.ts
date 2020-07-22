//object oriented programming structure

interface myfunction{
    add(a,b);
    sub(a,b);
    div(a,b);
    mul(a,b);
}

class myclass implements myfunction{

    name:String;
    salary:Number;

    constructor(nm,sal){
        this.name = nm;
        this.salary = sal;
    }

    add(a: any, b: any) {
        
    }
    sub(a: any, b: any) {
        
    }
    div(a: any, b: any) {
        
    }
    mul(a: any, b: any) {
       
    }

}

let obj = new myclass('bhadresh',123);
