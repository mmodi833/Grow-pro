"use strict";
exports.__esModule = true;
var message = "Hello World";
console.log(message);
var Size;
(function (Size) {
    Size[Size["small"] = 0] = "small";
    Size[Size["medium"] = 1] = "medium";
    Size[Size["large"] = 2] = "large";
})(Size || (Size = {}));
var Toppings;
(function (Toppings) {
    Toppings[Toppings["cheese"] = 0] = "cheese";
    Toppings[Toppings["onion"] = 1] = "onion";
    Toppings[Toppings["mashroom"] = 2] = "mashroom";
    Toppings[Toppings["extraCheese"] = 3] = "extraCheese";
})(Toppings || (Toppings = {}));
var pizza1, pizza2;
pizza1 = {
    id: 101,
    size: Size.medium,
    base: "Glutten",
    topping: Toppings.cheese
};
pizza2 = {
    id: 103,
    size: Size.large,
    base: "xyz",
    topping: 3
};
function outForDelivery(pizzas) {
    for (var i = 0; i < pizzas.length; i++) {
        var pizz_1 = void 0;
        pizz_1 = pizzas[i];
        switch (pizz_1.topping) {
            case Toppings.cheese:
                console.log("Pizza with cheese in out for delhivery", Toppings[pizz_1.topping]);
                break;
            case Toppings.mashroom:
                console.log("Pizza with mashroom topping is out for delivery", pizz_1);
                break;
            default:
                console.log(Toppings[pizz_1.topping]);
        }
    }
}
var pizz;
pizz = [pizza1, pizza2];
outForDelivery(pizz);
