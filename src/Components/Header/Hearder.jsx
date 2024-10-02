import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";

const Hearder = () => {
  const [toggle, setToggle] = useState(false);
  const showSliderMenu = () => {
    setToggle(true);
  };
  const hideSideMenu = () => {
    setToggle(false);
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
    },
    {
      icon: <IoHelpBuoyOutline />,
      name: "Help",
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
      <div
        className="Black-Overlay w-full h-full fixed duration-500"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      ></div>

      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-[500px] bg-white h-full absolute duration-500 "
        style={{
          left: toggle ? 0 : "-100%",
        }}
      ></div>

      <header className="p-[15px] shadow-xl">
        <div className="max-w-[1200px] mx-auto  flex items-center">
          <div className="w-[70px] hover:scale-125 transition-all duration-500 cursor-pointer">
            <img src={logo} alt="" className="w-full" />
          </div>
          <div className="">
            <span className=" font-bold border-b-[3px] pr-3">Kolkata</span>
            Thakurpukur ,India{" "}
            <RiArrowDownSLine
              onClick={showSliderMenu}
              fontSize={25}
              className=" inline text-[#11ff00]  cursor-pointer"
            />
          </div>
          <nav className="flex list-none gap-5 ml-auto text-[18] font-semibold">
            {link.map((link, index) => {
              return (
                <li
                  key={index}
                  className=" flex items-center hover:text-[#11ff00] gap-2 cursor-pointer"
                >
                  {link.link ? (
                    <Link to={link.link} className="flex items-center gap-2">
                      {link.icon}
                      {link.name}
                    </Link>
                  ) : (
                    <>
                      {link.icon}
                      {link.name}
                    </>
                  )}
                  <sup className="text-[#11ff00]">{link.sup}</sup>
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Hearder;
