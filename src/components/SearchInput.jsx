import React, { useState } from "react";

function SearchInput({ onSearch, city, setCity }) {
  // const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-between">
      <input
        type="text"
        placeholder="Enter a city..."
        className="w-[90%] text-white py-3 px-4 mr-2 bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 rounded overflow-hidden shadow-xl focus:outline-none focus:ring-none focus:ring-none"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white py-2 px-4 rounded shadow-lg"
      >
        Search
      </button>
    </form>
  );
}

export default SearchInput;
