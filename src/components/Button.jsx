import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-blue-900 hover:bg-blue-800 text-white py-2 px-3 rounded leading-tight">
      {children}
    </button>
  );
};

export default Button;
