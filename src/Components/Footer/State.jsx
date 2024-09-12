import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const State = () => {
  return (
    <div className=" text-slate-400 font-semibold ">
      <p className="font-bold pt-3 text-white">We deliver to :</p>

      <p className="pt-2">Kolkata</p>
      <p className="pt-2">Delhi</p>
      <p className="pt-2">Bihar</p>
      <p className="pt-2">Pune</p>
      <p className="pt-2">Hyderabad</p>
      <p className="pt-2 pb-2">Jharkand</p>
      <DropdownButton id="dropdown-basic-button" title="500+ Cities"  variant="null" className="border-1 rounded ">
      <Dropdown.Item href="#/action-1">Assam</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Madhya pardesh</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Goa</Dropdown.Item>
    </DropdownButton>
    </div>
  );
};

export default State;
