import React, { useEffect, useState } from "react";
import Field from "./Field";
import amazon_icon_black from "../../assets/amazon_icon_black.jpg";
import CopyrightIcon from "@mui/icons-material/Copyright";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "../../css/signinpass.css";
import { auth, signInWithEmailAndPassword } from "../../firebase";
import { useSelector } from "react-redux";
import { setUserPassword } from "../redux/userSlice";
import store from "../redux/store";
import validator from "validator";
import { useNavigate } from "react-router-dom";

function SignInPassword() {
  const [validate, setValidate] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [enterkeypress, setEnterKeyPress] = useState(false);
  const [listening, setListening] = useState(false);

  const navigate = useNavigate();
  const user = useSelector((user) => user);
  const email = user.user.userLogin.email;

  const handlePassword = (e) => {
    setPassword(e.target.value);
    const element = document.getElementById("password-field");
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
  };
  useEffect(() => {
    if (enterkeypress) {
      handleSignIn();
    }
  }, [enterkeypress]);

  const handleSignIn = () => {
    // e.preventDefault();
    store.dispatch(setUserPassword(password));
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
        console.log(userCredential);
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/wrong-password).") {
          setLoginError("Invalid password");
        } else if (error.message === "Firebase: Error (auth/user-not-found).") {
          setLoginError("User not found, check your email field");
        } else if (error.message === "Firebase: Error (auth/internal-error).") {
          if (password === "") {
            setLoginError("Password field cannot be empty");
          }
        } else {
          setLoginError("Check your internet connection");
        }
        console.log(error);
      });
    setValidate(true);
  };
  return (
    <div className="signin-page">
      <div className="signin">
        <div className="signup__header">
          <img src={amazon_icon_black} alt="" />
        </div>
        <div className="signin-pass__main">
          <h1>Sign-In</h1>
          <p style={{ display: email ? "block" : "none" }}>
            {email}
            <Link to="/signin_email" className="remove-link-style">
              {email ? <span> Change</span> : null}
            </Link>{" "}
          </p>
          <Field
            title="Password"
            id="password-field"
            forgot="Forgot your Password?"
            onChange={handlePassword}
          />
          {/* {validator.isEmpty(password) && validate && (
            <small className="field-error">
              Password field cannot be empty
            </small>
          )} */}
          {loginError ? (
            <small className="field-error">{loginError}</small>
          ) : null}
          <Link to={loginError || password === "" ? "" : "/"}>
            <button
              // type="submit"
              className="signup__continue"
              onClick={handleSignIn}
            >
              Continue
            </button>
          </Link>

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
              <button>Create your Amazon account</button>
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

export default SignInPassword;
