import React from "react";

const Wrapper = ({children :a}) => {
  return <div className="max-w-screen-xl mx-auto px-4 py-1">
    {children}
  </div>;
};

export default Wrapper;
