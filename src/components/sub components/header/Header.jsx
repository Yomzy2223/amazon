import React, { useEffect, useState } from "react";
import "../../../css/header.css";
import SearchIcon from "@mui/icons-material/Search";
import amazon_icon from "../../../assets/amazon_icon.png";
import usa_flag from "../../../assets/usa_flag.png";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { Departments } from "../../../assets/homepage-products";
import { Link } from "react-router-dom";
import NavLocation from "./NavLocation";

function Header() {
  const [searchFocus, setSearchFocus] = useState(false);
  const handleClick = (e) => {};

  useEffect(() => {
    if (searchFocus) {
      window.addEventListener("click", handleWindowClick);
    }
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, [searchFocus]);

  const handleFocus = () => {
    setSearchFocus(true);
  };
  const handleWindowClick = (e) => {
    const modalElement = document.getElementById("header-modal");
    e.target.contains(modalElement)
      ? setSearchFocus(false)
      : setSearchFocus(true);
  };

  return (
    <div className="header">
      <div className="header__content">
        <Link to="/" className="navlogo-container" tabIndex={0}>
          <img className="navlogo" src={amazon_icon} alt="" />
        </Link>
        <NavLocation />
        <div className="navsearch">
          <select name="categories" id="">
            {Departments.map((dept) => {
              return (
                <option value="dept" key={dept}>
                  {dept}
                </option>
              );
            })}
          </select>
          <input
            type="text"
            className="navsearch__input"
            onClick={handleClick}
            onFocus={handleFocus}
          />
          <button className="navsearch__submit">
            <SearchIcon sx={{ fontSize: 30 }} />
          </button>
        </div>
        <div className="navtools">
          <div className="language" tabIndex={0}>
            <div>
              <img src={usa_flag} alt="Eng" className="language__flag" />
            </div>
            <ArrowDropDownOutlinedIcon
              sx={{ width: 20, color: "#cccccc", alignSelf: "flex-end" }}
            />
          </div>
          <div className="navlink__account" tabIndex={0}>
            <div>
              <Link
                to="/signin_email"
                className="remove-link-style"
                style={{ color: "white" }}
              >
                <p className="navlink__account__line1">Hello, Sign in</p>
              </Link>
              <p className="navlink__account__line2">accounts & lists</p>
            </div>
            <ArrowDropDownOutlinedIcon
              sx={{ width: 20, color: "#cccccc", alignSelf: "flex-end" }}
            />
          </div>
          <div className="orders" tabIndex={0}>
            <p className="orders__line1">returns</p>
            <p className="orders__line2">& orders</p>
          </div>
          <div className="cart" tabIndex={0}>
            <ShoppingBasketOutlinedIcon sx={{ color: "white" }} />
            <span>5</span>
          </div>
        </div>
        {searchFocus && <div id="header-modal" className="header-modal"></div>}
      </div>
    </div>
  );
}

export default Header;
