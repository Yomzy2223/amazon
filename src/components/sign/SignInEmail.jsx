import React, { useEffect, useState } from "react";
import "../../css/signin.css";
import Field from "./Field";
import amazon_icon_black from "../../assets/amazon_icon_black.jpg";
import CopyrightIcon from "@mui/icons-material/Copyright";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { setUserEmail } from "../redux/userSlice";
import store from "../redux/store";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function SignInEmail() {
  const [email, setEmail] = useState("");
  const [validate, setValidate] = useState("");
  const [enterkeypress, setEnterKeyPress] = useState(false);
  const [listening, setListening] = useState(false);

  const navigate = useNavigate();
  const user = useSelector((user) => user);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const element = document.getElementById("email-field");
    element.addEventListener("keyup", (e) => {
      if (!listening) {
        element.addEventListener("keyup", (e) => {
          if (e.code === "Enter") {
            setEnterKeyPress(true);
          } else {
            setEnterKeyPress(false);
          }
          setListening(true);
        });
      }
    });
  };
  useEffect(() => {
    if (enterkeypress) {
      handleSignIn();
    }
  }, [enterkeypress]);

  const handleSignIn = () => {
    store.dispatch(setUserEmail(email));
    setValidate(true);
    if (validator.isEmail(email)) {
      navigate("/signin_password");
    }
  };

  return (
    <div className="signin-page">
      <div className="signin">
        <div className="signup__header">
          <img src={amazon_icon_black} alt="" />
        </div>
        <div className="signin__main">
          <h1>Sign-In</h1>
          <Field
            title="Email or mobile phone number"
            id="email-field"
            onChange={handleEmail}
            value={email}
          />
          {!validator.isEmail(email) && validate && (
            <small className="field-error">
              Please enter a valid email address
            </small>
          )}
          <Link to="/signin_password">
            <button
              // type="submit"
              className="signup__continue"
              onClick={handleSignIn}
            >
              Continue
            </button>
          </Link>
          <p>
            By continuing, you agree to Amazon's{" "}
            <Link to="/" className="remove-link-style">
              <span className="cond-of-use"> Condition of Use</span>
            </Link>{" "}
            and
            <Link to="/" className="remove-link-style">
              <span className="privacy-notice"> Privacy Notice</span>.
            </Link>
          </p>
          <Link to="/" className="remove-link-style">
            <span className="signin__help">
              <ArrowRightIcon sx={{ color: "black" }} /> Need help?{" "}
            </span>
          </Link>
        </div>
        <div className="create-new-account">
          <div className="create-new-account__title">
            <div className="dash"></div>
            <p> New to Amazon? </p>
            <div className="dash"></div>
          </div>
          <div className="create-new-account__button">
            <Link to="/signup" className="remove-link-style">
              <button className="signup__continue">
                Create your Amazon account
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="signup__footer">
        <div className="separator" style={{ width: "100%" }} />
        <div className="signup__footer-details">
          <div className="signup__footer-links">
            <Link to="/" className="remove-link-style tocenter">
              <span> Condition of Use</span>
            </Link>
            <Link to="/" className="remove-link-style tocenter">
              <span> Privacy Notice</span>
            </Link>
            <Link to="/" className="remove-link-style tocenter">
              <span> Help</span>
            </Link>
          </div>
          <p>
            <CopyrightIcon sx={{ fontSize: 12 }} className="copyright" />{" "}
            {"1996 - 2022"}, Amazon.com, Inc or its affiliates
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignInEmail;
