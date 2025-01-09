"use client";
import React, { useState } from "react";
// import { Toggle } from "./ui/toggle";

const ThemeChanger = () => {
  const [isOn, setIsOn] = useState(true);

  return (
    <div className="justify-self-end m-20">
      <button
        type="button"
        className={`m-2 p-2 rounded-lg ${
          isOn ? `text-white bg-slate-800` : `text-black bg-slate-400`
        }`}
        onClick={`() => setIsOn(!isOn)`}
      >
        {isOn ? `Dark` : `light`}
      </button>
    </div>
  );
};

export default ThemeChanger;
