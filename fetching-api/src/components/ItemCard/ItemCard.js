import React from "react";
import "./ItemCard.css";

function ItemCard({ key, image, title, description, price }) {
  return (
    <>
      <div className="item">
        <p className="key">{key}</p>
        <img className="image" src={image} alt="" srcset="" />
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <p className="price">{price}$</p>
      </div>
    </>
  );
}

export default ItemCard;
