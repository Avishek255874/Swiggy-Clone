import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Catogory = () => {
  const [slide, setSlide] = useState(3);
  const [categories, setCategory] = useState([]);

  const fetchCategory = async () => {
    const response = await fetch("http://localhost:5000/categories");
    const data = await response.json();
    setCategory(data);
  };
  const preSlide = () => {
    if (slide == 0) return false;
    setSlide(slide - 3);
  };
  const nextSlide = () => {
    console.log(categories.length);
    if (categories.length - 8 == slide) return false;
    setSlide(slide + 3);
  };

  useEffect(() => {
    fetchCategory();
  }, []);
  return (
    <div className="max-w-[1200px] mx-auto  ">
      <div className="  my-3 flex items-center justify-between">
        <div className="text-[25px] font-bold">What's on your mind?</div>
        <div className="flex">
          <div
            className=" flex items-center justify-center w-[30px] h-[30px] bg-slate-200  cursor-pointer rounded-full mx-2"
            onClick={preSlide}
          >
            <FaChevronLeft />
          </div>
          <div
            className=" flex items-center justify-center w-[30px] h-[30px] bg-slate-200  cursor-pointer rounded-full mx-2 "
            onClick={nextSlide}
          >
            <FaChevronRight />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden">
        {categories.map((cat, index) => {
          return (
            <div
              style={{
                transform: `translateX(-${slide * 100}%)`,
                
              }}
              key={index}
              className=" w-[150px] shrink-0 "
            >
              <img src={"http://localhost:5000/images/" + cat.image} alt=" image" />
            </div>
          );
        })}
      </div>
      <hr className="  my-6 border-[1px] shadow-xl" />
    </div>
  );
};

export default Catogory;
