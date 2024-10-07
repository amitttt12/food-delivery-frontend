import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../components/context/StoreContext";
const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext)


  return (
    <form className="placeOrder">

      <div className="placeOrderLeft">
        <p className="title">Delivery Information</p>
        <div className="multiFields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />

        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="multiFields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />

        </div>
        <div className="multiFields">
          <input type="text" placeholder="Pincode" />
          <input type="text" placeholder="Country" />

        </div>
        <input type="text" placeholder="phone" />
      </div>
      <div className="placeOrderRight">

        <div className='cartTotal'>
          <h2>Cart Total</h2>
          <div>
            <div className='cartTotalDetails'>
              <p>Subtotal</p>
              <p>Rs.{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cartTotalDetails'>
              <p>Delievry Fee</p>
              <p>Rs.{getTotalCartAmount() === 0 ? 0 : 20}</p>
            </div>
            <hr />
            <div className='cartTotalDetails'>
              <b>Total</b>
              <b>Rs.{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 20}</b>
            </div>


          </div>
          <button>Proceed to Payment</button>
        </div>



      </div>

    </form>
  )
};

export default PlaceOrder;
