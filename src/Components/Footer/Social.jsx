import React from "react";
import play from "../../assets/play.png";
import app from "../../assets/apple.png";

const Social = () => {
  return (
    <div className="  flex justify-center bg-[#f0f0f5]  p-2">
      <div className="flex justify-between w-[1200px]">
        <div className=" flex  justify-between items-center p-2">
          <p className="font-bold text-2xl ">
            For better experience,download
            <br /> the Swigg-y app now
          </p>
        </div>
        <div className=" flex justify-between items-center  p-2 w-[400px]">
          <div className="w-full">
            <img src={play} alt="image" />
          </div>
          <div className="w-full  ">
            <img src={app} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
