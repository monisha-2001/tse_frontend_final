import React, { useState } from "react";
import mockData from "./mockData";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedRelatedItems, setSelectedRelatedItems] = useState([]);

  const handleSearch = () => {
    if (query.trim() === "") {
      // Clear the results when the search bar is empty
      setResults([]);
    } else {
      // Filter and display modules that include the query
      const filteredResults = mockData.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);

      // Clear related search suggestions when searching
      setSelectedRelatedItems([]);
    }
  };

  const handleSelect = (item, source) => {
    const isSelected =
      source === "results"
        ? selectedItems.some((selectedItem) => selectedItem.id === item.id)
        : selectedRelatedItems.some(
            (selectedItem) => selectedItem.id === item.id
          );

    if (isSelected) {
      if (source === "results") {
        setSelectedItems(
          selectedItems.filter((selectedItem) => selectedItem.id !== item.id)
        );
      } else {
        setSelectedRelatedItems(
          selectedRelatedItems.filter(
            (selectedItem) => selectedItem.id !== item.id
          )
        );
      }
    } else {
      if (source === "results") {
        setSelectedItems([...selectedItems, item]);
      } else {
        setSelectedRelatedItems([...selectedRelatedItems, item]);
      }
    }
  };

  return (
    <div className="bg-[#121415] text-white p-2 md:p-4">
      <div className="bg-[#202326] p-4 rounded-lg shadow-md">
        <h1 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          Search Python Modules
        </h1>
        <div className="mb-2 md:flex md:items-center">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full md:w-auto px-3 py-2 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-700 text-white mb-2 md:mb-0"
          />
          <button
            onClick={handleSearch}
            className="mt-2 md:mt-0 bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-gray-700 md:ml-2"
          >
            Search
          </button>
        </div>
        {results.length > 0 && (
          <div className="mb-4">
            <p className="text-gray-400">Search Results:</p>
            <ul className="max-h-48 overflow-y-auto mt-2">
              {results.map((item) => (
                <li
                  key={item.id}
                  className="mb-2 bg-gray-800 p-2 rounded-lg shadow"
                >
                  <strong className="text-white text-lg mb-2 md:text-xl">
                    {item.name}
                  </strong>
                  : {item.description}
                  <button
                    onClick={() => handleSelect(item, "results")}
                    className="ml-2 bg-blue-500 text-white mb-2 px-2 py-1 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-gray-700"
                  >
                    {selectedItems.some(
                      (selectedItem) => selectedItem.id === item.id
                    )
                      ? "Deselect"
                      : "Select"}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {query.trim() === "" &&
          selectedItems.length === 0 &&
          selectedRelatedItems.length === 0 && (
            <p className="mt-2 md:mt-4 text-gray-400">
              Enter a search query to find Python modules.
            </p>
          )}
        {(selectedItems.length > 0 || selectedRelatedItems.length > 0) && (
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mt-2 md:mt-4">
              Selected Items:
            </h2>
            <ul className="mt-2 max-h-24 overflow-y-auto">
              {selectedItems.map((item) => (
                <li
                  key={item.id}
                  className="bg-gray-800 mb-2 md:mb-4 p-2 rounded-lg shadow flex justify-between items-center"
                >
                  {item.name}
                  <button
                    onClick={() => handleSelect(item, "results")}
                    className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:bg-gray-700"
                  >
                    Deselect
                  </button>
                </li>
              ))}
              {selectedRelatedItems.map((item) => (
                <li
                  key={item.id}
                  className="bg-gray-800 mb-2 md:mb-4 p-2 rounded-lg shadow flex justify-between items-center"
                >
                  {item.name}
                  <button
                    onClick={() => handleSelect(item, "relatedSearches")}
                    className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:bg-gray-700"
                  >
                    Deselect
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
