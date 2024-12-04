'use client';
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// xs sm md lg xl 2xl 3xl 4xl 5xl 6xl 7xl 8xl 9xl
const Header = () => {
  interface navLinks {
    label: string;
    path: string;
    id: number;
  }

  const navLinks: navLinks[] = [
    {
      label: "Home",
      path: "/",
      id: 1,
    },
    {
      label: "About",
      path: "/",
      id: 2,
    },
    {
      label: "Contact",
      path: "/contact",
      id: 3,
    },
  ];

  const [search, setSearch] = useState("");

  return (
    <header className="flex bg-[#f9f9f9]   h-24 w-screen justify-between items-center p-4 shadow-lg shadow-black">
      <div className="">
        <Image
          className="  w-10 h-10 md:w-14 md:h-14 "
          src="/Zebotix.png"
          alt="logo"
          width={500}
          height={500}
        />
      </div>
      <div className="flex bg-gray-200 px-2 md:px-4 py-1 md:py-2 rounded-full overflow-hidden w-1/3  md:w-1/2 outline-none gap-2">
        <input
          type="search"
          className="bg-gray-200 px-2 md:px-4 text-sm font-thin md:text-xl outline-none w-full"
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
      </div>
      <div></div>
      <div className=" hidden ">
        {navLinks.map(({ label, path, id }) => (
          <Link key={id} href={path} className="">
            {label}
          </Link>
        ))}
      </div>
      <div className="login">
        <Link href={"/"}>
          <button type="button">login</button>
        </Link>
        {` / `}
        <Link href={`/`}>
          <button type="button">Sign Up</button>
        </Link>
      </div>
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
