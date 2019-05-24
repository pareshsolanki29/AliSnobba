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

 calculateDiscount(){
    var dis =this.shoppingCart.map(pr =>  pr.price - pr.discount/100 )
    var totalAfterDiscount = dis.reduce((acc, price) => acc + price, 0);
    return totalAfterDiscount.toFixed(2);
 }

 getItemQuantity(name){
     var quantity = this.shoppingCart.filter(ele => ele.item == name)
     return quantity.length;
 }


}


module.exports =  Cart;