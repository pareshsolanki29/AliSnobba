const Item = require('./item.js');



class Cart {

    constructor(){
        this.shoppingCart = [];
    }

 getCart(){
     return this.shoppingCart;
 }

 createItem(item, price, discount){
     
     let item1 = new Item(item, price, discount);
     let itemArray = [];
     itemArray.push(item1);
     this.shoppingCart.push(item1);
     return this.shoppingCart;

 }
deleteItem(name){
    
    this.shoppingCart.filter(function(e) { console.log(e.item);return e.item !== name; });
}


 totalPrice(){
    let gross = 0;
     this.shoppingCart.reduce(function(a,b){ return a.price + b.price})    
 }
 

}

module.exports =  Cart;