import React from "react";
import "../../../css/footertemp.css";

function FooterTemp({ list }) {
  return (
    <div className="footer-temp">
      <p className="footer-temp__title">{list.title}</p>
      <div className="footer-temp__body">
        {list.list.map((list) => {
          return <li key={list}>{list}</li>;
        })}
      </div>
    </div>
  );
}

export default FooterTemp;
