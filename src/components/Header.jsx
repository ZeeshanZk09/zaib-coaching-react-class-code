import React from "react";
import Link from "next/link";

const navLinks = [
  {
    pageName: "Home",
    path: "/",
    id: 1,
  },
  {
    pageName: "About",
    path: "/about",
    id: 2,
  },
  {
    pageName: "Services",
    path: "/services",
    id: 3,
  },
];

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-logo"></div>
        <div className="nav-links" style={{
                padding : 10,
                display : 'flex',
                justifyContent : 'space-between',
                flexDirection : 'row',
                gap: 10
              }}>
          {navLinks.map(({ pageName, path, id }) => (
              <Link href={path} id={id}  >
                {pageName}
              </Link>
       
         ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
