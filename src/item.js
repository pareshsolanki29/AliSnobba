

class Item{
    constructor(item, price, discount){
        this.item = item;
        this.price = price;
        this.discount = discount;
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