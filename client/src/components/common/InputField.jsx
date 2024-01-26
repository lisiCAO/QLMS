import React from "react";

const InputField = ({ type, value, onChange, placeholder, className }) => (
  <input
    type={type}
    className={className}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
  />
);

export default InputField;
