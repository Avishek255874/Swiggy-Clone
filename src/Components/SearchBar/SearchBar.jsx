import React from "react";
import Hearder from "../Header/Hearder";
import ReccItem from "./ReccItem";


const SearchBar = () => {
  return (
    <>
      <Hearder />
      <div className="max-w-[860px] mx-auto pt-4 pb-5">
        <div className="my-3 flex  items-center border-2   ">
          <input
            type="text"
            placeholder="Search for restaurants and food......                  "
            className="w-[800px] p-3  border-none   outline-none"
          />
          <i className="fa-solid fa-magnifying-glass text-[25px] text-gray-500 " />
        </div>
       
      </div>
      <ReccItem/>
      

    </>
  );
};

export default SearchBar;
