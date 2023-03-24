import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-900">
      <div className="container mx-auto box-border py-8 px-4 mt-20">
        <div className="text-center text-white text-sm md:text-base">
          Copyright © {new Date().getFullYear()} Mon. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
