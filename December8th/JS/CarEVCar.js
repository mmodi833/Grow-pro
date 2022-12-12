class Car{
  
    constructor(id,model,dealer,price){

        this.id=id;
        this.model=model;
        this.dealer=dealer;
        this.price=price;
    }
    get id(){
        return this._id;
    }
    set id(val){
     this._id =val;

    }
   
    get brand(){
      return this._brand;
    }
    set brand(val){

     this._brand =val;
    }
    disp(){
        console.log(`${this.id} ${this.price}`);
    }

}
let car1 = new Car(1111,'zxi','creta',2000000);
car1.disp();

let car2=new Car();
car2.id = 123444;
car2.brand='swift desire';

console.log(car2.id);
console.log(car2.brand);


class EV extends Car{

    constructor(id,model,dealer,price,batterylife){
       
        //super keyword -- to invoke the constructor of the super class
        
       super(id,model,dealer,price);
        
    
        this.batterylife  =batterylife;
    }

    toString(){
        return `id:${this.id} Model${this.model} Dealer${this.dealer}
        Price:${this.price} BatteryLife:${this.batterylife}`;
    }
    
    disp(){
    
        super.disp();
        console.log(this.batterylife);
    }
    
    }
    
let ev= new EV(111,'nexon','tata',1500000,400);

ev.disp;


// class Button{

//    constructor(val){
//     this.val=val;
//    }
 //instead of creating regular function , where you will lose the reference to "this" 

 //use arrow function
 //funtion expression

 /*
let click = function(){};
 */

//    click=()=>{
//     console.log('inside the click of Button class');
//     console.log(this.val);
//    }



// }

// let btnObj= new Button('click1');
//invoking click thru btn
// setTimeout(btnObj.click,1000);


//create a employee class 
//constructor, get and set methods for its data members
//create objects
//display them

//extends - keyword



let evCars=[
    new EV(21,"Vitara","Maruti","22L",400)
];

console.log(evCars);

evCars.push(new EV(25,"altroz","tata","8L",500));
console.log(evCars);

evCars.unshift(new EV(28,"Nano","tata","6L",350));
console.log(evCars);

evCars.splice(1,0,new EV(20,"swift","maruti","8L",400));
console.log(evCars);


evCars.splice(1,1);
console.log(evCars);


let button=document.getElementById("submit");

button.addEventListener("submit",fn,true);

localStorage.setItem("val",JSON.stringify(evCars));


function fn(e){
    e.preventDefault();
    let id=document.getElementById("id").value;
    let model=document.getElementById("model").value;
    let dealer=document.getElementById("dealer").value;
    let price=document.getElementById("price").value;
    let batteryLife=document.getElementById("batteryLife").value;


    let evv=new EV(id,model,dealer,price,batteryLife);

    let evCars=JSON.parse(localStorage.getItem("val"));

    console.log(evCars);

    evCars.push(evv);


localStorage.setItem("val",JSON.stringify(evCars));
button.reset();

console.log(evCars);
print();



}


function print(){

    let evCars=JSON.parse(localStorage.getItem("val"));
    
   let list= document.getElementById("list");
   list.innerHTML="";

    for(let i=0;i<evCars.length;i++){
        let li=document.createElement("li");
        li.innerHTML=JSON.stringify(evCars[i]);
        list.appendChild(li);

    }

}





