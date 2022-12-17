import React from "react";
import FooterMain from "./FooterMain";
import FooterSub from "./FooterSub";
import "../../../css/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="to-top">
        <p>Back to top</p>
      </div>
      <div className="footer-main">
        <FooterMain />
      </div>
      <div className="footer-sub">
        <FooterSub />
      </div>
    </div>
  );
}

export default Footer;
