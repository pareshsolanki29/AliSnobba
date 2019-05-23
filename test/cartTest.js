const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const Cart = require('../src/Cart.js');



  describe('Cart', ()=>{
      it('should initialize a Cart', () => {
          const cart = new Cart();
          console.log("this is", typeof cart)
          assert.exists(cart);
        //   assert(cart.getCart()).to.deep.equal([]);
        //   assert.exists(cart);
      })

      it('should return an empty cart', ()=>{
          const cart = new Cart();
          assert.exists(cart.getCart());
          assert.deepEqual(cart.getCart(), []);
      })




      it('should create an item in shopping cart', ()=>{
          const cart = new Cart();
          const item1 = cart.createItem("mango", 2, 2)
          const item2 = cart.createItem("apple", 2, 2)
          console.log(typeof cart.shoppingCart)
          expect(cart.shoppingCart[1].item).to.deep.equal("apple")
        //   assert.deepEqual(cart.getCart().length, 1);
      })

      it('should delete item', () => {

        const cart  =  new Cart();
        const item1 = cart.createItem("mango", 2, 2)
        const item2 = cart.createItem("apple", 2, 2)
        cart.deleteItem("mango");
        console.log("this is item:" ,cart.shoppingCart[0].item);
        })

        it('should return total price', ()=>{

        const cart  =  new Cart();
        const item1 = cart.createItem("mango", 2, 2)
        const item2 = cart.createItem("apple", 2, 2)

        assert.equal(cart.totalPrice() , 4)

        })

      })
