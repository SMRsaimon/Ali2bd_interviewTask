import React from "react";
import Header from "./Header";

const LayOut = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default LayOut;
