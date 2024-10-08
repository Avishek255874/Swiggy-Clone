import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "./Card";

const TopRest = () => {
  const [data, setData] = useState([]);
  const fetchTopRestaurant = async () => {
    const response = await fetch("http://localhost:5000/top-restaurant-chains");
    const apiData = await response.json();
    setData(apiData);

    useEffect(() => {
      fetchTopRestaurant();
    }, []);
    
    return (
      <div >
        <div className="  my-3 flex items-center justify-between">
          <div className="text-[25px] font-bold"></div>
          <div className="flex">
            <div className=" flex items-center justify-center w-[30px] h-[30px] bg-[#11ff00]  cursor-pointer rounded-full mx-2 text-white">
              <FaChevronLeft />
            </div>
            <div className=" flex items-center justify-center w-[30px] h-[30px] bg-[#11ff00]  text-white cursor-pointer rounded-full mx-2 ">
              <FaChevronRight />
            </div>
          </div>
        </div>

        <hr className="  my-6 border-[1px] shadow-xl" />
      </div>
    );
  };
};

export default TopRest;
