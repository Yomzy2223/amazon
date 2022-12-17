import React from "react";
import Header from "../sub components/header/Header";
import NavShop from "../sub components/NavShop";
import SlideShow from "../sub components/SlideShow";
import Products from "../sub components/products/Products";
import { userSlice as User } from "../redux/userSlice";
import Footer from "../sub components/footer/Footer";
import LocationModal from "../sub components/header/LocationModal";

function Home() {
  return (
    <>
      <Header />
      <LocationModal />
      <NavShop />
      <SlideShow />
      <Products />
      <Footer />
    </>
  );
}

export default Home;
