class Product {
    constructor(id, name, brand, price, category) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.category = category;
    }
}
var Category;
(function (Category) {
    Category[Category["electric"] = 0] = "electric";
    Category[Category["kitchen"] = 1] = "kitchen";
    Category[Category["furniture"] = 2] = "furniture";
})(Category || (Category = {}));
class ShopingCart {
    constructor(cart) {
        this.cart = new Map();
        this.cart = cart;
    }
    calculatePrice() {
        let price = 0;
        this.cart.forEach((value, key) => {
            let pr;
            pr = key.price;
            price += (pr * value);
        });
        return price;
    }
}
let p1 = new Product(1, "Bulb", "Wipro", 650, Category.electric);
let p2 = new Product(2, "Gas Stove", "Bajaj", 3000, Category.kitchen);
let p3 = new Product(3, "Chair", "Preffry", 5000, Category.furniture);
let cart = new Map();
cart.set(p1, 4);
cart.set(p2, 1);
cart.set(p3, 4);
let sh = new ShopingCart(cart);
console.log(sh.calculatePrice());
