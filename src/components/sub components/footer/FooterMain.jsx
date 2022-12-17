import React from "react";
import { Footer_info } from "../../../assets/homepage-products";
import FooterTemp from "./FooterTemp";
import Languages from "./Languages";
import amazon_icon from "../../../assets/amazon_icon.png";
import usa_flag from "../../../assets/usa_flag.png";
import "../../../css/footermain.css";
import LanguageIcon from "@mui/icons-material/Language";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import PopDiv from "../PopDiv";

function FooterMain() {
  const { main } = Footer_info;

  return (
    <div className="footer-m">
      <div className="footer-main">
        <div className="footer-maindiv">
          {main.map((list) => {
            return <FooterTemp list={list} key={list.title} />;
          })}
        </div>
      </div>
      <div className="footer-submain">
        <div>
          <img
            src={amazon_icon}
            className="footer-submain__amazon-logo"
            alt=""
          />
          <div className="footer__languages">
            <button className="footer__language">
              <LanguageIcon sx={{ fontSize: "17px" }} /> <span>English</span>{" "}
              <UnfoldMoreIcon
                sx={{ fontSize: "15px", color: "rgba(255,255,255,0.3)" }}
              />
            </button>
            <div id="languages">
              <PopDiv>
                <Languages />
              </PopDiv>
            </div>
          </div>
          <button>USD - U.S. Dollar</button>
          <button>
            <img src={usa_flag} alt="" />
            <span>United States</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FooterMain;
