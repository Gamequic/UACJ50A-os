import React from "react";

const BackgroundUACJ = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <img
        alt="Background"
        src={`${process.env.PUBLIC_URL}/Background.jpg`}
        className="fixed inset-0 w-full h-full object-cover"
      />
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundUACJ;
