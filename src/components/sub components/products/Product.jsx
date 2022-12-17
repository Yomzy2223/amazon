import React from "react";
import "../../../css/product.css";
import { Link } from "react-router-dom";

const Product = ({ id, title, images, link }) => {
  return (
    <div className="product-container">
      <p className="product-title">{title}</p>
      <div key={id} className="product">
        {images.map((img) => (
          <div key={img.id} className="product-ind-main">
            {images.length > 1 ? (
              <div className="product-ind" key={id + img.id}>
                <img src={img.img_link} alt="" />
              </div>
            ) : (
              <div className="product-ind__single-img">
                <img key={id} src={img.img_link} alt="" />
              </div>
            )}
            <div className="product-desc">
              <p>{img.img_desc}</p>
            </div>
          </div>
        ))}
      </div>
      <Link to="/" className="product__shop">
        <p>{link}</p>
      </Link>
    </div>
  );
};

export default Product;
