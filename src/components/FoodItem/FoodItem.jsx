import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  // console.log("id", id);
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className="foodItem">
      <div className="foodItemImageContainer">
        <img className="foodItemImage" src={image} alt="food-item-image" />
        {!cartItems?.[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="add-btn-icon"
          />
        ) : (
          <div className="foodItemCounter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="icon-remove"
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              alt="icon-green"
              onClick={() => addToCart(id)}
            />
          </div>
        )}
      </div>
      <div className="foodItemInfo">
        <div className="foodItemNameRating">
          <p>{name}</p>
          <img src={assets.rating_starts} />
        </div>

        <p className="foodItemDesc">{description}</p>
        <p className="foodItemPrice">Rs.{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
