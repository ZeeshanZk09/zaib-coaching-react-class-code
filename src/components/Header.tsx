"use client";
// import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Header.css";

// xs sm md lg xl 2xl 3xl 4xl 5xl 6xl 7xl 8xl 9xl
const Header = () => {
  interface navLinks {
    label: string;
    path: string;
    id: number;
  }

  const navLinks: navLinks[] = [
    {
      label: "Job",
      path: "/",
      id: 1,
    },
    {
      label: "Services",
      path: "/",
      id: 2,
    },
    {
      label: "Product",
      path: "/product",
      id: 3,
    },
    {
      label: "Internships",
      path: "/internships",
      id: 4,
    },
    {
      label: "Portfolio",
      path: "/portfolio",
      id: 5,
    },
    {
      label: "Reviews",
      path: "/reviews",
      id: 6,
    },
    {
      label: "Contact",
      path: "/contact",
      id: 7,
    },
  ];

  // const [search, setSearch] = useState("");

  return (
    <header className="absolute flex flex-col bg-white  h-24 md:w-screen justify-start items-center  overfollow-hidden">
      {/* Mobile view */}
      <nav className="md:hidden w-screen  p-2 overflow-hidden flex  justify-between">
        <div className="flex flex-row-reverse w-full items-center justify-between px-2">
          <Link href={`/`}>
            <Image
              className="  w-7 h-7 md:w-14 md:h-14 "
              src="/Zebotix.png"
              alt="logo"
              width={500}
              height={500}
            />
          </Link>

          <div className="flex flex-row-reverse gap-4">
            <button type="button" title="search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 md:w-6 md:h-6"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 50 50"
              >
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
              </svg>
            </button>
            <Link href={"/"}>
              <button
                type="button"
                className="border  px-2 py-1 rounded-md outline-none"
              >
                login
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden">
          <input
            className="border-none rounded-full px-2"
            title="Search here"
            type="search"
            name="search"
            id="navInputSearch"
          />
        </div>
      </nav>
      <nav className="md:hidden bg-gray-300 p-3 ">
        <div className="w-screen px-4 flex justify-between ">
          <ul className="flex justify-between w-2/3">
            <li className="border border-gray-800 rounded-md p-1">
              <Link href={`/`} className="flex text-xs items-center gap-1">
                Languages{" "}
                <span>
                  <Image
                    className="w-4 h-4"
                    src={"/icons8-globe.gif"}
                    alt="down-arrow"
                    width={100}
                    height={100}
                  />
                </span>
              </Link>
            </li>
            <li>
              <Link href={`/`}>Jobs</Link>
            </li>
            <li>
              <Link href={`/`}>Services</Link>
            </li>
          </ul>
          <div className="w-1/3 flex gap-2 items-center justify-end">
            <svg
              className=" "
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z"></path>
            </svg>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50"
            >
              <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
            </svg>
          </div>
        </div>
      </nav>

      {/* ----------------- desktop view ----------------- */}

      <nav className="hidden p-2 h-2/4 w-full md:flex  md:justify-between">
        {/* <div className="hidden lg:flex bg-gray-200 px-2 md:px-4 py-1 md:py-2 rounded-full overflow-hidden w-1/3  md:w-1/2 outline-none lg:gap-2">
          <input
            type="search"
            className="bg-gray-200 px-2 md:px-4 text-sm rounded-full font-thin md:text-xl outline-none w-full"
            name="search"
            id="search"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="button" title="search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 md:w-6 md:h-6"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 50 50"
            >
              <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg>
          </button>
        </div> */}

        <div>
          <Image
            className="w-8 h-8"
            src={`/Zebotix.png`}
            alt="zebotix"
            width={500}
            height={500}
          />
        </div>
        <div className="flex md:flex-row-reverse gap-2">
          <Link href={"/"}>
            <button
              type="button"
              className="border-b-2 border-gray-500 px-2 py-1 rounded-md outline-none"
            >
              login
            </button>
          </Link>
          <Link
            href={`/`}
            className="flex border border-black rounded-md p-2 text-xs items-center gap-1"
          >
            Languages{" "}
            <span>
              <Image
                className="w-4 h-4"
                src={"/icons8-globe.gif"}
                alt="down-arrow"
                width={100}
                height={100}
              />
            </span>
          </Link>
        </div>
      </nav>
      <nav className="hidden md:flex w-screen md:justify-between px-2 items-center">
        <div className="flex gap-4 justify-start items-center">
          <svg
            className="home-icon w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z"></path>
          </svg>
          <div className="flex flex-row-reverse gap-4">
            {navLinks.map(({ label, path, id }) => (
              <Link
                key={id}
                href={path}
                className="link-with-border font-medium text-sm md:text-lg"
              >
                {label}
              </Link>
            ))}
          </div>
          <div></div>
        </div>
        <div>
          <svg
            className="w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 50 50"
          >
            <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default Header;

// *----------------- header from css wali class ka code -------------*

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// const navLinks = [
//   {
//     pageName: "Home",
//     path: "/",
//     id: 1,
//   },
//   {
//     pageName: "About",
//     path: "/about",
//     id: 2,
//   },
//   {
//     pageName: "Services",
//     path: "/services",
//     id: 3,
//   },
// ];

// const Header = () => {
//   return (
//     <header>
//       <nav style={{
//           display:'flex',
//           justifyContent:"space-between"
//         }}>
//         <div className="nav-logo" style={{
//           width:''
//         }} >
//           <Image
//           style={{
//             width:'100px',
//             height: '100px'
//           }}
//             src={`/assets/images/companyLogo.png`}
//             alt="logo"
//             width={1000}
//             height={1000}
//           />
//         </div>
//         <div
//           className="nav-links"
//           style={{
//             padding: 10,
//             display: "flex",
//             justifyContent: "space-between",
//             flexDirection: "row",
//             gap: 10,
//           }}
//         >
//           <ul>
//             {navLinks.map(({ pageName, path, id }) => (
//               <li  key={id}>
//                 <Link href={path}>
//                   {pageName}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

// *----------------------- state & prop wali class ka code -----------------*
// "use client";
// import React, { useState } from "react";

// let str = "Hello";

// str + ' world';

// console.log(str)
// const HomePage = () => {
//   const condVar = Math.random() > 0.5 ? "Yes" : "No";

// const loopVar = () => {
//   for (let i = 0; i <= 5; i++) {}
// }; // const [counterPlus, setCounterPlus] = useState(0);
// const[counterMinus, setCounterMinus] = useState(0);
// console.log(counter, setCounter)

// const handleClickPlus = () => {
//   setCounterPlus(counterPlus + 1);
// };

// const handleClickMinus = () => {
//   setCounterMinus(counterMinus - 1);
// };
//   const [inputName, setInputName] = useState("");
//   return (
//     <div>
//       {/* <div>
//         Counter : {counterMinus}
//         CounterPlus : {counterPlus}
//         <button type="button" style={{
//           background: 'gray',
//           padding: '10px'
//         }} onClick={() => handleClickMinus()}>
//           -
//         </button>
//         <button type="button" style={{
//           background: 'gray',
//           padding: '10px'
//         }} onClick={() => handleClickPlus()}>
//           +
//         </button>
//       </div> */}
//       <form action="">
//         <h1>First Name: {inputName}</h1>
//         <br />
//         <input
//           type="text"
//           style={{
//             border: "1px solid black",
//           }}
//           value={inputName}
//           onChange={(e) => setInputName(e.target.value)}
//         />
//         <br />
//         <button type="submit" onClick={(e) => e.defaultPrevented}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default HomePage;
