import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../components/context/StoreContext'

const Cart = () => {

  const { food_list, cartItems, removeFromCart, getTotalCartAmount } = useContext(StoreContext)
  return (
    <div className='cart'>
      <div className='cartItem'>
        <div className='cartItemsTitle'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (


              <div key={index}>
                <div className='cartItemsTitle cartItem-item' >
                  <img src={item.image} alt="cart-image" />
                  <p>{item.name}</p>
                  <p>Rs.{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>Rs.{item.price * cartItems[item._id]}</p>
                  <p className='crossRemove' onClick={() => { removeFromCart(item._id) }}>x</p>
                </div>
                <hr />
              </div>
            )
          }

        })}

      </div>


      <div className='cartBottom'>
        <div className='cartTotal'>
          <h2>Cart Total</h2>
          <div>
            <div className='cartTotalDetails'>
              <p>Subtotal</p>
              <p>Rs.{getTotalCartAmount() }</p>
            </div>
            <hr />
            <div className='cartTotalDetails'>
              <p>Delievry Fee</p>
              <p>{20}</p>
            </div>
            <hr />
            <div className='cartTotalDetails'>
              <b>Total</b>
              <b>Rs.{getTotalCartAmount() + 20}</b>
            </div>


          </div>
          <button>Proceed to checkout</button>
        </div>

        <div className='cartPromoCode'>
          <div>
            <p>If you have a promo code,Enter it here</p>
            <div className='cartPromoInput'>
              <input type='text' placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart