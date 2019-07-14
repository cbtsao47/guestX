import React from "react";

const TextBox = ({ userInput, handleChange, disabled }) => {
  return (
    <form action="">
      <textarea
        name="userInput"
        id="userInput"
        cols="30"
        rows="10"
        value={userInput}
        onChange={handleChange}
        disabled={disabled}
      />
    </form>
  );
};

export default TextBox;
