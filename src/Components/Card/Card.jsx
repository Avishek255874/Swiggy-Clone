import React from "react";

const Card = (props) => {
  return (
    <div className="w-[273px] shrink-0 grow ">
      <div className="h-[180px] rounded-[15px] overflow-hidden relative">
        <img
          className="object-cover w-full h-full border-2 border-red-500"
          scr={"http://localhost:5000/images/" + props.image}
        />
        <div className="Image-Overlay absolute w-full h-full top-0 items-end p-2  text-[25px] text-white">
          {props.offer}
        </div>
      </div>
    </div>
  );
};

export default Card;
