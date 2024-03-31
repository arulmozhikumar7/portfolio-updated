import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Theme from "../assets/theme.png";
const Navbar = ({ toggleTheme }) => {
  const items = [
    { id: 1, label: "About", to: "#About" },
    {
      id: 2,
      label: "Projects",
      submenu: [
        { id: 4, label: "Newsletter Web App", to: "/Newsletter" },
        { id: 5, label: "Pizza Ordering App", to: "/Pizza" },
        { id: 6, label: "Expenses Tracker", to: "/Expenses" },
      ],
    },
    { id: 3, label: "Contact", to: "#Contact" },
  ];

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {items.map((item) => (
              <li key={item.id}>
                {item.submenu ? (
                  <>
                    <AnchorLink href={item.to}>{item.label}</AnchorLink>
                    <ul className="p-2">
                      {item.submenu.map((subitem) => (
                        <li key={subitem.id}>
                          <AnchorLink href={subitem.to}>
                            {subitem.label}
                          </AnchorLink>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <AnchorLink href={item.to}>{item.label}</AnchorLink>
                )}
              </li>
            ))}
          </ul>
        </div>
        <AnchorLink href="Home" className="btn btn-ghost text-xl">
          Arulmozhikumar
        </AnchorLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {items.map((item) => (
            <li key={item.id}>
              {item.submenu ? (
                <details>
                  <summary>
                    <AnchorLink href={item.to}>{item.label}</AnchorLink>
                  </summary>
                  <ul className="p-6">
                    {item.submenu.map((subitem) => (
                      <li key={subitem.id} className="w-full">
                        <AnchorLink href={subitem.to}>
                          {subitem.label}
                        </AnchorLink>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <AnchorLink href={item.to}>{item.label}</AnchorLink>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a onClick={toggleTheme}>
          <img src={Theme} alt="" className="w-6 h-6 " />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
