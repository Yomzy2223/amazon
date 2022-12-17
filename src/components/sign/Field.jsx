import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "../../css/field.css";

function Field({
  title,
  placeholder,
  pass_valid_icon,
  pass_valid_text,
  forgot,
  type,
  onChange,
  toggleVisibility,
  toggle,
  field,
  id,
  value,
}) {
  return (
    <div className="sign-in-up-field">
      <p className="field-title">
        {title} <span>{forgot}</span>
      </p>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {toggle
        ? field === "password" && (
            <VisibilityOffIcon
              className="password-icon"
              onClick={toggleVisibility}
            />
          )
        : field === "password" && (
            <VisibilityIcon
              className="password-icon"
              onClick={toggleVisibility}
            />
          )}
      <p className="password-valid">
        {pass_valid_icon} <>{pass_valid_text}</>{" "}
      </p>
    </div>
  );
}

export default Field;
