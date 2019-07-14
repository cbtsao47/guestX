import React from "react";

const Button = ({handleClick}) => {
  return (
    <div onClick={handleClick}>
      <h1>Button</h1>
    </div>
  );
};

export default Button;
