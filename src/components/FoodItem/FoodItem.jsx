import React, { useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";

const FoodItem = ({ id, name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);
  return (
    <div className="foodItem">
      <div className="foodItemImageContainer">
        <img className="foodItemImage" src={image} alt="food-item-image" />
        {!itemCount ? (
          <img
            className="add"
            onClick={() => setItemCount((prev) => prev + 1)}
            src={assets.add_icon_white}
            alt="add-btn-icon"
          />
        ) : (
          <div className="foodItemCounter">
            <img
              onClick={() => setItemCount((prev) => prev - 1)}
              src={assets.remove_icon_red}
              alt="icon-remove"
            />
            <p>{itemCount}</p>
            <img
              src={assets.add_icon_green}
              alt="icon-green"
              onClick={() => setItemCount((prev) => prev + 1)}
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
