import React from "react";
import "../../css/popdiv.css";

function PopDiv(props) {
  return (
    <div className="popdiv">
      <div id="popdiv-arrow"></div>
      {props.children}
    </div>
  );
}

export default PopDiv;
