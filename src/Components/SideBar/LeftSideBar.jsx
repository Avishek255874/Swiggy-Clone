import React from "react";
import FloatingInput from "./FloatingInput";

const LeftSideBar = () => {
  return (
    <div className=" ml-[150px]  p-5 cursor-pointer ">
      <i className="fa-solid fa-x text-[20px] cursor-pointer flex-end" />
      <div className="flex justify-between p-2">
        <div>
          <p className="text-[30px]">Login </p>
          <p className="text-[15px]">
            or <span className="text-[#11ff00]">create an account</span>
          </p>
          <hr className="w-[50px] border-2 text-black" />
        </div>
        <div className="w-[100px]">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" />
        </div>
      </div>
      <div className="  py-4">
        <div className="border-1 ">
          <FloatingInput label="Phone Number" type="text" name="username" />
        </div>
      </div>
      <button className="bg-[#11ff00] text-white py-3  w-full">Login</button>
      <p className="text-[12px] text-gray-400 font-light">
        By clicking on Login, I accept the{" "}
        <span className="text-[#000000] text-gray-800 font-semibold">
          Terms & Conditions & Privacy Policy
        </span>
      </p>
    </div>
  );
};

export default LeftSideBar;
