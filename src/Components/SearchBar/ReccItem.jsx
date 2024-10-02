import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const ReccItem = () => {
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
    <div className="max-w-[860px] mx-auto  ">
      <div className="  my-3 flex items-center justify-between">
        <div className="text-[20px] font-bold">Popular Cuisines</div>
        <div className="flex">
         
         
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
              className=" w-[80px] shrink-0 "
            >
              <img src={"http://localhost:5000/images/" + cat.image} alt=" image" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReccItem;
