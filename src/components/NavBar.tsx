import Image from "next/image";
import React, { useState } from "react";
import ThemeChanger from "./ThemeChanger";

const Navbar = () => {
  return (
    <nav className="absolute max-w-[60vw] mx-auto flex items-center justify-between h-[100px]">
      <span>
        <Image
          src="/logo.svg"
          alt="Netflix"
          width={130}
          height={100}
          className="w-[130px] relative z-10 z-"
        />
      </span>
      <div>
        <button
          type="button"
          className="relative z-10 btn px-4 py-2 border rounded-md"
        >
          English
        </button>
        <button
          type="button"
          className="relative z-10 btn btn-red-sm px-4 py-2 ml-4 bg-red-600 text-white rounded-md"
        >
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
