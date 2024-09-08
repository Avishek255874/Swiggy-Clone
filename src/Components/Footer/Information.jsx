import React from "react";
import swigg from "../../assets/swigg.png";

const Information = () => {
  return (
    <div className="  flex justify-center bg-black h-[400px] text-white p-5 ">
      <div className="flex justify-between w-[1200px]">
        <div className="border-2 border-white p-3">
          <img src={swigg} alt="" className="w-[150px] h-[60px]" />

          <p className="text-slate-400 ps-3">©️2024 ASSASS Pvt.Ltd Group. </p>
        </div>
        <div className="border-2 border-white">hllooo</div>
        <div className="border-2 border-white">jguugfghf</div>
        <div className="border-2 border-white">jguugfghf</div>
      </div>
    </div>
  );
};

export default Information;
