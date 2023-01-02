export {};
let message="Hello World";
console.log(message);

enum Size{
    small,
    medium,
    large

}

enum Toppings{
    cheese,
    onion,
    mashroom,
    extraCheese
}

interface Pizza{
    id:number;
    size:Size,
    base:string,
    topping:Toppings

}


let pizza1,pizza2:Pizza;
pizza1={
    id:101,
    size:Size.medium,
    base:"Glutten",
    topping:Toppings.cheese
}
pizza2={
    id:103,
    size:Size.large,
    base:"xyz",
    topping:3
}

function outForDelivery(pizzas:Pizza[]){
    for(let i:number=0;i<pizzas.length;i++){
        let pizz:Pizza;
        pizz=pizzas[i];

        switch(pizz.topping){
            case Toppings.cheese:
                console.log("Pizza with cheese in out for delhivery",Toppings[pizz.topping]);
                break;
            case Toppings.mashroom:
                console.log("Pizza with mashroom topping is out for delivery",pizz);
                break;
            default:
                console.log(Toppings[pizz.topping]);
            
        
        }
        

    }


}

let pizz:Pizza[];
pizz=[pizza1,pizza2];

outForDelivery(pizz);
