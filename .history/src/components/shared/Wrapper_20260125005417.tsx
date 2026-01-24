import React, { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return <div className="max-w-screen-xl mx-auto px-4 py-24">{children}</div>;
};

export default Wrapper;