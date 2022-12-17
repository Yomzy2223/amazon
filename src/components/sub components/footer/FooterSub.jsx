import React from "react";
import { Link } from "react-router-dom";
import { Footer_info } from "../../../assets/homepage-products";
import "../../../css/footersub.css";
import CopyrightIcon from "@mui/icons-material/Copyright";

function FooterSub() {
  const { list1, list2, list3, list4, list5, list6, list7 } = Footer_info.Sub;
  const lists = [list1, list2, list3, list4, list5, list6, list7];
  return (
    <div className="footer-sub">
      <div className="footer-sub__info">
        {lists.map((list) => {
          return (
            <div className="each-list" key={list[0].title}>
              {list.map((each) => {
                return (
                  <Link to="/" className="each-list__ind" key={each.title}>
                    <p className="each-list__ind-title">{each.title}</p>
                    <p className="each-list__ind-info">{each.info}</p>
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="footer-sub__bottom">
        <Link to="/" className="footer-sub__bottom-link">
          <p>Condition of Use</p>
        </Link>
        <Link to="/" className="footer-sub__bottom-link">
          <p>Privacy Notice</p>
        </Link>
        <Link to="/" className="footer-sub__bottom-link">
          <p>Interest-Based Ads</p>
        </Link>
        <p>
          <CopyrightIcon sx={{ fontSize: "12px" }} />
          {" 1996-2022"}, Amazon.com Inc. or its affiliates
        </p>
      </div>
    </div>
  );
}

export default FooterSub;
