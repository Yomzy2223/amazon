import React from "react";

function SignIn({ title, images }) {
  return (
    <div className="container">
      <div className="banner__sign-in-container">
        <p className="banner__title">{title}</p>
        <button className="banner__sign-in">Sign in securely</button>
      </div>
      <div className="banner__image">
        <img src={images[0].img_link} alt="" />
      </div>
    </div>
  );
}

export default SignIn;
