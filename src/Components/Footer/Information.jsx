import React from "react";
import swigg from "../../assets/swigg.png";
import Company from "./Company";
import ContactUs from "./ContactUs";
import State from "./State";

const Information = () => {
  return (
    <div className="  flex justify-center bg-black h-[400px] text-white p-5 ">
      <div className="flex justify-between w-[1200px] ">
        <div className="p-3">
          <img src={swigg} alt="" className="w-[150px] h-[60px]" />
          <p className="text-slate-400 ps-3">©️2024 ASSASS Pvt.Ltd Group. </p>
        </div>
        <div className="">
          <Company />
        </div>
        <div className="">
          <ContactUs />
        </div>
        <div className="">
          <State />
        </div>
      </div>
    </div>
  );
};

export default Information;
