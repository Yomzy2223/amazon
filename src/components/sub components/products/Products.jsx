import React from "react";
import Product from "./Product";
import ProductsWide from "./ProductsWide";
import Deals from "./Deals";
import SignIn from "./SignIn";
import "../../../css/products.css";
import {
  All_Products,
  Freq_repurchased,
  Top_sellers_for_you,
  Pop_products,
  International_top_sellers,
} from "../../../assets/homepage-products";

const Products = () => {
  var body = document.getElementById("root");
  var bodyWidth = body.scrollWidth;
  return (
    <div className="products">
      {All_Products.map((product) => {
        const { id, title, images, link, price, info } = product;
        return id < 11 || id === "sign in" || id === "deals" ? (
          id !== "sign in" && id !== "deals" ? (
            <Product
              key={id}
              id={id}
              title={title}
              images={images}
              link={link}
            />
          ) : id === "deals" ? (
            <Deals
              key={id}
              title={title}
              images={images}
              price={price}
              info={info}
              link={link}
            />
          ) : (
            <SignIn key={id} images={images} title={title} />
          )
        ) : null;
      })}
      <ProductsWide
        images={Freq_repurchased.Drugstore.images}
        title={Freq_repurchased.Drugstore.title}
      />
      <ProductsWide
        images={Pop_products.Beauty.images}
        title={Pop_products.Beauty.title}
      />
      <ProductsWide
        images={Pop_products.PC_Internationally.images}
        title={Pop_products.PC_Internationally.title}
      />
      <ProductsWide
        images={Freq_repurchased.Home.images}
        title={Freq_repurchased.Home.title}
      />
      <ProductsWide
        images={Top_sellers_for_you.Books.images}
        title={Top_sellers_for_you.Books.title}
      />
      {All_Products.map((product) => {
        const { id, title, images, link } = product;
        return id >= 11 && id < 15 && bodyWidth > 1344 ? (
          <Product key={id} id={id} title={title} images={images} link={link} />
        ) : bodyWidth < 1344 ? (
          <Product key={id} id={id} title={title} images={images} link={link} />
        ) : null;
      })}
      <ProductsWide
        images={International_top_sellers.Phones.images}
        title={International_top_sellers.Phones.title}
      />
      <ProductsWide
        images={International_top_sellers.Home.images}
        title={International_top_sellers.Home.title}
      />
    </div>
  );
};

export default Products;
