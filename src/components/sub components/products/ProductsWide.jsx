import React from "react";
import "../../../css/products-wide.css";
import { Freq_purchased } from "../../../assets/homepage-products";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function ProductsWide({ title, images }) {
  var id = 1;
  return (
    <div className="products-images-container">
      {<p className="product-title">{title}</p>}
      <div className="to-left">
        <ArrowBackIosIcon />
      </div>
      <div className="freq-purchased__products">
        {images.map((img) => {
          id++;
          return <img src={img} alt="" key={id} />;
        })}
      </div>
      <div className="to-right">
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
}

export default ProductsWide;
