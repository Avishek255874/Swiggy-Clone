import React, { useState } from "react";
import Hearder from "../Header/Hearder";
import ReccItem from "./ReccItem";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestionsVisible, setSuggestionsVisible] = useState(false);

  const items = [
    "Pizza",
    "Burger",
    "Pasta",
    "Tacos",
    "Sushi",
    "Sandwich",
    "Salad",
    "Fries",
    "Noodles",
    "Ice Cream",
    "Biryani",
    "Momo",
    "Alfredo",
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setSuggestionsVisible(true);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
  };

  return (
    <>
      <Hearder />
      <div className="max-w-[860px] mx-auto pt-4 pb-5">
        <div className="my-3 flex items-center border-2">
          <input
            type="text"
            placeholder="Search for restaurants and food..."
            className="w-[800px] p-3 border-none outline-none"
            value={searchTerm}
            onChange={handleSearch}
          />
          <i className="fa-solid fa-magnifying-glass text-[25px] text-gray-500 cursor-pointer" />
        </div>

        {suggestionsVisible && searchTerm && (
          <ul className="border border-gray-200 bg-white w-[800px] max-h-[200px] overflow-y-auto mt-2 rounded-lg shadow-lg">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <li
                  key={index}
                  className="p-3 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSuggestionClick(item)}
                >
                  {item}
                </li>
              ))
            ) : (
              <li className="p-3 text-gray-500">No results found</li>
            )}
          </ul>
        )}
      </div>
      <ReccItem />
    </>
  );
};

export default SearchBar;
