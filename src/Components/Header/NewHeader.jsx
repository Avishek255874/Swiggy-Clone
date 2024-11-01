import React from "react";
import logos from "../../assets/Zesty.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";

const NewHeader = () => {
  return (
    <header className="shadow-xl  ">
      <div className="max-w-[1200px] mx-auto  flex  items-center ">
        <div className="w-[70px] cursor-pointer">
          <img src={logos} alt=" imageLogo" />
        </div>
        <div className="pl-5">
          <i class="fa-solid fa-location-arrow text-[#12ff01] text-[20px] " />
          <span className=" font-bold "> Setup your precise location</span>

          <RiArrowDownSLine
            fontSize={25}
            className=" inline text-[#12ff01]  cursor-pointer"
          />
        </div>
        <div className=" list-none gap-5 ml-auto text-center">
          <div className="flex ">
            <div className="my-3 flex items-center rounded border-2">
              <input
                type="text"
                placeholder="Search for restaurants and food..."
                className="w-[350px] p-3 border-none  outline-none"
              />
              <i className="fa-solid fa-magnifying-glass text-[25px] pr-2 text-gray-300 cursor-pointer" />
            </div>
            <i className="fa-solid fa-circle-user   p-3 text-[50px] " />
          </div>
          
        </div>
        
      </div>
      
    </header>
  );
};

export default NewHeader;
