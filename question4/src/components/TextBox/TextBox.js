import React from "react";
import "./TextBox.css";
const TextBox = ({
  userInput,
  handleChange,
  disabled,
  placeholder = "No Match"
}) => {
  return (
    <form action="" className="text-box-wrapper">
      <textarea
        className="text-box-textarea"
        name="userInput"
        id="userInput"
        cols="30"
        rows="10"
        value={userInput}
        onChange={handleChange}
        disabled={disabled}
        placeholder={placeholder}
      />
    </form>
  );
};

export default TextBox;
