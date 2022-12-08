
let cart={
    addItem:function(name){
        console.log("Adding Item "+name+" to cart ");
    },
    removeItem:function(){
        console.log("Removing Item from cart")
    }
}

cart.checkout=function(){
    console.log("Cheking out");
}

cart.addItem("lap");
cart.removeItem();
cart.checkout();


