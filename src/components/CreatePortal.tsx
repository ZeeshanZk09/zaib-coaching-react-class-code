import React from "react";
import ReactDOM from "react-dom";
// import { createPortal } from "react-dom";

const PopupContent = ({ children }: { children: React.ReactNode }) => {
  if (typeof document === "undefined") {
    return null; // Return null if document is not defined (server-side)
  }

  return ReactDOM.createPortal(
    <section className="bg-slate-400">{children}</section>,
    document.querySelector("#popup-root") as Element // Mount the popup to the DOM
  );
};

export default PopupContent;
