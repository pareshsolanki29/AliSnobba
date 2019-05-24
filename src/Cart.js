const Item = require('./item.js');



class Cart {

    constructor(){
        this.shoppingCart = [];
    }

 getCart(){
     return this.shoppingCart;
 }

 createItem(item, price, discount){ 
     const item1 = new Item(item, price, discount);
     this.shoppingCart.push(item1)
     return this.shoppingCart;
 }

 
    deleteItem(name){ 
      this.shoppingCart = this.shoppingCart.filter(ele => ele.item !== name);
      return this.shoppingCart;
    }


 totalPrice(){
    let gross = 0;
    this.shoppingCart.forEach(function(ele){
     gross+=ele.price;
    })
   return gross; 
 }
 

}

module.exports =  Cart;