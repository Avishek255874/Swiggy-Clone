import React, { useState } from "react";
import { MdOutlineLocationSearching } from "react-icons/md";
import { RxCountdownTimer } from "react-icons/rx";

const SideBar = ({ hideSideMenu }) => {
  const [location, setLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          setErrorMessage("Unable to retrieve your location");
        }
      );
    } else {
      setErrorMessage("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div className="pl-8 pt-5 ">
    
      <i
        className="fa-solid fa-x text-[20px] cursor-pointer"
        onClick={hideSideMenu} 
      />
      <br />
      <br />
      <div className="flex items-center border w-[380px] hover:shadow-xl ">
        <input
          type="text"
          placeholder="Search for area, street name.."
          className="w-[500px] p-3 border-none outline-none"
        />
      </div>

      <br />
      <div
        className="border w-[380px] flex items-center p-4 cursor-pointer"
        onClick={handleGetLocation}
      >
        <MdOutlineLocationSearching className="text-[25px] font-light  " />
        <div className="ps-3">
          <p className="text-[16px] pb-1 hover:text-[#11ff00]">
            Get current location
          </p>
          <p className="text-[13px] text-gray-500">Using GPS</p>
        </div>
      </div>

      {location && (
        <div className="pt-3">
          <p className="text-[13px] text-gray-500">
            Latitude: {location.latitude}, Longitude: {location.longitude}
          </p>
        </div>
      )}

      {errorMessage && (
        <div className="pt-3 text-red-500">
          <p>{errorMessage}</p>
        </div>
      )}

      <br />
      <div className="border w-[380px] pt-3">
        <div className="ps-5">
          <p className="text-[13px] text-gray-500">RECENT SEARCH</p>
        </div>
        <div className="flex items-center p-4">
          <RxCountdownTimer className="text-[20px] font-light  " />
          <div className="ps-3">
            <p className="text-[16px] pb-1 hover:text-[#11ff00]">Kolkata</p>
            <p className="text-[13px] text-gray-500">West Bengal, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
