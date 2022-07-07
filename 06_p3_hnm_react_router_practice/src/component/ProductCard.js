import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="pb-5 product_card">
      <img src={item?.img} alt="" className="product_card_img pb-2" />
      <div className="product_card_detail">
        <div>{item?.choice === true ? "Conscious choice" : ""}</div>
        <div>{item?.title}</div>
        <div>&#8361; {item?.price}</div>
        <div>{item?.new === true ? "NEW" : ""}</div>
      </div>
    </div>
  );
};

export default ProductCard;
