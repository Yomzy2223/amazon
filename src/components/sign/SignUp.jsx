import React, { useState } from "react";
import Field from "./Field";
import amazon_icon_black from "../../assets/amazon_icon_black.jpg";
import "../../css/signup.css";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { Link, useNavigate } from "react-router-dom";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { db, auth, createUserWithEmailAndPassword } from "../../firebase";
import validator from "validator";

function SignIn() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [validate, setValidate] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [showPassword, setShowPassword] = useState("password");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleName = (e) => {
    setUser({ ...user, name: e.target.value });
  };
  const handleEmail = (e) => {
    setUser({ ...user, email: e.target.value });
  };
  const handlePassword = (e) => {
    setUser({ ...user, password: e.target.value });
  };
  const handleConfirmPassword = (e) => {
    setUser({ ...user, confirm_password: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (
      user.password === user.confirm_password &&
      validator.isLength(user.password, 6)
    ) {
      createUserWithEmailAndPassword(auth, user.email, user.password, user.name)
        .then((userCredential) => {
          if (userCredential) {
            navigate("/");
          }
          console.log(userCredential.user);
        })
        .catch((error) => {
          if (
            error.message === "Firebase: Error (auth/network-request-failed)."
          ) {
            setError("Check your network connection");
          } else {
            setError("Email is already in use");
          }
        });
    }
    setValidate(true);
  };
  const toggleVisibility = () => {
    setToggle(!toggle);
    toggle ? setShowPassword("text") : setShowPassword("password");
  };

  return (
    <div className="signup-page">
      <div className="signup">
        <div className="signup__header">
          <img src={amazon_icon_black} alt="" />
        </div>
        <div className="signup__main">
          <h1>Create account</h1>
          <Field title="Your name" type="text" onChange={handleName} />
          <Field
            title="Mobile number or email"
            type="email"
            onChange={handleEmail}
          />
          {!validator.isEmail(user.email) && validate && (
            <small className="field-error">Enter a valid email</small>
          )}
          <Field
            title="Password"
            placeholder="At least 6 characters"
            type={showPassword}
            field="password"
            onChange={handlePassword}
            toggle={toggle}
            toggleVisibility={toggleVisibility}
            pass_valid_icon={
              <PriorityHighIcon
                sx={{
                  fontSize: 13,
                  color: "rgb(100,164,250)",
                }}
              />
            }
            pass_valid_text="Passwords must be at least 6 characters."
          />
          {!validator.isLength(user.password, 6) && validate && (
            <small className="field-error">
              Passwords must be at least 6 characters
            </small>
          )}
          <Field
            title="Re-enter password"
            type={showPassword}
            onChange={handleConfirmPassword}
            toggle={toggle}
            field="password"
            toggleVisibility={toggleVisibility}
          />
          {user.password !== user.confirm_password && validate && (
            <small className="field-error">
              Password field does match the re-entered password
            </small>
          )}
          <Link to="/" className="remove-link-style">
            <button
              type="submit"
              className="signup__continue"
              onClick={handleSignUp}
            >
              Continue
            </button>
          </Link>
          {error ? (
            <small
              className="field-error"
              style={{ top: 0, textAlign: "center" }}
            >
              {error}
            </small>
          ) : null}

          <div className="signup__info">
            <p>
              By creating an account, you agree to Amazon's{" "}
              <Link to="/" className="remove-link-style">
                <span className="cond-of-use"> Condition of Use</span>
              </Link>{" "}
              and
              <Link to="/" className="remove-link-style">
                <span className="privacy-notice"> Privacy Notice</span>
              </Link>
            </p>
            <div className="separator" />
          </div>
          <div className="signup-main__footer">
            <p className="have-an-account">
              Already have an account?
              <Link to="/signin_email" className="remove-link-style">
                <span> Sign-in</span>
              </Link>
            </p>
            <p className="signup__business">
              Buying for work?
              <Link to="/" className="remove-link-style">
                <span> Create a free business account</span>
              </Link>
            </p>
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

export default SignIn;
