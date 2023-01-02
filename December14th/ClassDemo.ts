class Product{
     id:number;
     name:string;
     brand:string;
     price:number;
     category:Category;

     constructor(id,name,brand,price,category){
        this.id=id;
        this.name=name;
        this.brand=brand;
        this.price=price;
        this.category=category;
     }



}

enum Category{
    electric,
    kitchen,
    furniture
}


class ShopingCart{

   cart=new Map();

   constructor(cart:Map<Product,number>){
    this.cart=cart;
   }


  public calculatePrice(){
        let price:number=0;
        this.cart.forEach((value: number, key: Product) => {
            let pr:number;
            pr=key.price;

            price+=(pr*value);
        });

        return price;
  }
}

let p1=new Product(1,"Bulb","Wipro",650,Category.electric);
let p2=new Product(2,"Gas Stove","Bajaj",3000,Category.kitchen);
let p3=new Product(3,"Chair","Preffry",5000,Category.furniture);

let cart:Map<Product,number>=new Map();
cart.set(p1,4);
cart.set(p2,1);
cart.set(p3,4);

let sh=new ShopingCart(cart);

console.log(sh.calculatePrice());
