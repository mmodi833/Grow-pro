class Employee{

    constructor(name,id,age){
        this.name=name;
        this.id=id;
        this.age=age;
    }

    get name(){
        return this._name;
    }
    get age(){
        return this._age;
    }
    get id(){
        return this._id;
    }

    set id(val){
        this._id=val;
    }
    set name(val){
        this._name=val;
    }
    set age(val){
        this._age=val;
    }


    disp=()=>{
        console.log( `Name:${this.name} Id:${this.id} Age:${this.age}`);
    }


}




let vansh=new Employee('vansh',2121,22);
let akash=new Employee();
akash.name='akash'
akash.age=22;
akash.id=2122;


(vansh.disp());

console.log(akash.name);