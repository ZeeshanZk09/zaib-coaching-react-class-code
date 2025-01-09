// import Todo from "@/components/Todo";
// import UserForm from "@/components/UserForm";
"use client";

import PopupContent from "@/components/CreatePortal";
// import ThemeChanger from "@/components/ThemeChanger";
// import UseStateArrayObj from "@/components/UseStateArrObj";
import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  // const [themeChange, setThemeChange] = useState(true);
  // const handleChange = () => {};

  return (
    <main className={`flex flex-col justify-between h-screen w-full `}>
      {/* <ThemeChanger ThemeChangerToogle={handleChange} /> */}

      {/* <UserForm /> */}
      {/* <Todo /> */}
      {/* <UseStateArrayObj /> */}
      <div className="flex flex-col items-center justify-center h-screen w-screen">
        <button onClick={handleCopy} type="button">
          Click Me
        </button>
        <PopupContent>
          <div>
            {copied && (
              <div
                data-be-installed="true"
                style={{ width: "100%" }}
                data-liner-extension-version="7.16.2"
                data-new-gr-c-s-check-loaded="14.1092.0"
                data-gr-ext-installed=""
                className="popup__content"
              >
                <p className="popup__content__text">Copied to clipboard!</p>
              </div>
            )}
          </div>
        </PopupContent>
      </div>
    </main>
  );
}
