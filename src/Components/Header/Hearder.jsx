import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
import SideBar from "../SideBar/SideBar";
import LeftSideBar from "../SideBar/LeftSideBar"; // Import LeftSideBar

const Header = () => {
  const [showLeftSideBar, setShowLeftSideBar] = useState(false); // Left sidebar state
  const [showRightSideBar, setShowRightSideBar] = useState(false); // Right sidebar state

  // Function to show or hide the left sidebar
  const toggleLeftSideBar = () => {
    setShowLeftSideBar(!showLeftSideBar);
  };

  // Function to show or hide the right sidebar
  const toggleRightSideBar = () => {
    setShowRightSideBar(!showRightSideBar);
  };
  const toggleSideBar = () => {
    setShowSideBar(!showSideBar); // Toggle state
  };

  const link = [
    {
      icon: <IoSearchOutline />,
      name: "Search",
      link: "/search",
    },
    {
      icon: <CiDiscount1 />,
      name: "Offers",
      sup: "New",
      link: "/offers",
    },
    {
      icon: <IoHelpBuoyOutline />,
      name: "Help",
      link: "/help",
    },
    {
      icon: <FiUser />,
      name: "SignIn",
    },
    {
      icon: <BsCart2 />,
      name: "Cart",
      sup: "(0)",
    },
  ];

  return (
    <>
      {/* Overlay to hide menus when clicked outside */}
      {(showLeftSideBar || showRightSideBar) && (
        <div
          className="Black-Overlay w-full h-full fixed z-40 bg-black opacity-50"
          onClick={() => {
            setShowLeftSideBar(false);
            setShowRightSideBar(false);
          }}
        ></div>
      )}

      {/* Right Side Menu */}
      <div
        className={`fixed top-0 right-0 w-[754px] h-full bg-white z-50 duration-500 transform ${
          showRightSideBar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <SideBar hideSideMenu={toggleSideBar} />
      </div>

      {/* Left Side Menu (Sign In) */}
      <div
        className={`fixed top-0 left-0 w-[754px] h-full bg-white z-50 duration-500 transform ${
          showLeftSideBar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <LeftSideBar hideSideMenu={toggleLeftSideBar} />
      </div>

      {/* Header */}
      <header className="p-[15px] shadow-xl">
        <div className="max-w-[1200px] mx-auto flex items-center">
          {/* Logo */}
          <div className="w-[70px] hover:scale-125 transition-all duration-500 cursor-pointer">
            <img src={logo} alt="Logo" className="w-full" />
          </div>

          {/* Location */}
          <div>
            <span className="font-bold border-b-[3px] pr-3">Kolkata</span>
            Thakurpukur, India{" "}
            <RiArrowDownSLine
              onClick={toggleRightSideBar} // Open right sidebar for location change
              fontSize={25}
              className="inline text-[#11ff00] cursor-pointer"
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex list-none gap-5 ml-auto text-[18px] font-semibold">
            {link.map((link, index) => (
              <li
                key={index}
                className="flex items-center hover:text-[#11ff00] gap-2 cursor-pointer"
              >
                {link.link ? (
                  <Link to={link.link} className="flex items-center gap-2">
                    {link.icon}
                    {link.name}
                  </Link>
                ) : (
                  <div
                    className="flex items-center gap-2"
                    onClick={() => {
                      if (link.name === "SignIn") {
                        toggleLeftSideBar(); // Open left sidebar for SignIn
                      }
                    }}
                  >
                    {link.icon}
                    {link.name}
                  </div>
                )}
                <sup className="text-[#11ff00]">{link.sup}</sup>
              </li>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
