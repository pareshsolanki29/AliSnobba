const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const Cart = require('../src/Cart.js');



  describe('Cart', ()=>{
      xit('should initialize a Cart', () => {
          const cart = new Cart();
          console.log("this is", typeof cart)
          assert.exists(cart);
        //   assert(cart.getCart()).to.deep.equal([]);
        //   assert.exists(cart);
      })

      xit('should return an empty cart', ()=>{
          const cart = new Cart();
          assert.exists(cart.getCart());
          assert.deepEqual(cart.getCart(), []);
      })




      xit('should create an item in shopping cart', ()=>{
          const cart = new Cart();
          const item1 = cart.createItem("mango", 2, 2)
          const item2 = cart.createItem("mango", 2, 2)
          console.log(typeof cart.shoppingCart)
          expect(cart.shoppingCart[0].item).to.deep.equal("mango")
        //   assert.deepEqual(cart.getCart().length, 1);
      })

      it('should delete item', () => {

        const cart  =  new Cart();
        const item1 = cart.createItem("mango", 2, 2)
        const item2 = cart.createItem("apple", 2, 2)
        cart.deleteItem("mango");
        console.log("this is item:" ,cart.shoppingCart);
        })

        xit('should return total price', ()=>{
        const cart  =  new Cart();
        const item1 = cart.createItem("mango", 2, 2)
        const item2 = cart.createItem("apple", 2, 2)
        assert.equal(cart.totalPrice() , 4)

        })

      })
