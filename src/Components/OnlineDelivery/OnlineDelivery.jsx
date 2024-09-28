import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const OnlineDelivery = () => {
  const [data, setData] = useState([]);

  const fetchTopRestaurant = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/top-restaurant-chains"
      );
      const apiData = await response.json();
      setData(apiData);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  useEffect(() => {
    fetchTopRestaurant();
  }, []);
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="my-3 flex items-center justify-between">
        <div className="text-[25px] font-bold">
          Restaurants with online food delivery in Kolkata
        </div>
        </div>
     <div className="grid grid-cols-4 gap-3">
     {
        data.map((d, i) => {
          return  <Card {...d} />;
         
        })
      }
     </div>
      
    </div>
  );
};

export default OnlineDelivery;
