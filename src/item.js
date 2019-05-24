

class Item{
    constructor(item, price, discount, quantity){
        this.item = item;
        this.price = price;
        this.discount = discount;
        this.quantity = quantity;
    }
    getItem(){
        return this.item
    }
    setItem(){
        this.item = item
    }
    getPrice(){
        return this.price
    }
    setPrice(){
        this.price = price
    }
    getDiscount(){
        return this.discount
    }
    setDiscount(){
        this.discount = discount
    }
}

module.exports = Item;