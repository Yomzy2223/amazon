import React from "react";

function Deals({ title, images, price, info, link }) {
  return (
    <div id="deals" className="container">
      <p className="product-title">{title}</p>
      <img src={images[0].img_link} alt="" />
      <div className="deal-price">
        <p>
          <sup>$</sup>
          {price.low}
          <sup>{price.lc}</sup> - <sup>$</sup>
          {price.high}
          <sup>{price.hc}</sup>
        </p>
      </div>
      <p className="deal-info">{info}</p>
      <p className="product__shop">{link}</p>
    </div>
  );
}

export default Deals;
