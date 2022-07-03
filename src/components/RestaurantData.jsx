import React from "react";

const RestaurantData = ({ data }) => {
  const { name, category, costForTwo, offer, deliveryTiming, rating, image } = data;
  return (
    <div>
      <div className="card">
        <img width="254" height="160px" src={image} />
        <div className="restaurant-details">
          <div className="restaurant-title">{name}</div>
          <div className="restaurant-subtitle">{category.join(", ")}</div>
        </div>
        <div className="restaurant-info">
          <div className="restaurant-ratings">
            <h5 className="material-icons star-icon">★{rating}</h5>
          </div>
          <div className="restaurant-delivery-timings"> {deliveryTiming}</div>
          <div className="restaurant-cost-for-two">₹ {costForTwo} FOR TWO</div>
        </div>
        <div className="offer-banner">
          <span className="material-icons"> local_offer </span>
          <span className="offer-text"> {offer}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantData;
