import React from "react";
import { useState } from "react";
import "./app.css";
const Search = () => {
  const data = [
    {
      id: 1,
      name: "Paper pounch",
      price: 46,
    },
    {
      id: 2,
      name: "Paper bag",
    },

    {
      id: 3,
      name: "Coffee pot",
    },
    {
      id: 4,
      name: "Plastic pouch",
    },
    {
      id: 5,
      name: "Tea pot",
    },
    {
      id: 6,
      name: "paper cup",
    },
    {
      id: 7,
      name: "choco bites",
    },
    {
      id: 8,
      name: "ground coffee",
    },
    {
      id: 9,
      name: "moka pot",
    },
    {
      id: 10,
      name: "cafe bags",
    },
    {
      id: 11,
      name: "tea cup",
    },
    {
      id: 12,
      name: "recycled bag",
    },
  ];
  
  const [searchResult, setSearchResult] = useState([""]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = data.filter((data) => data.name.toLowerCase().includes(input.toLowerCase()));
    setSearchResult(result);
  };
  return (
    <div className="search">
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="search here..."
        />
        <button>Search</button>
      </form>
      <div style={{ textAlign: "center", padding: "1rem" }}>
        {searchResult.length > 0 ? (
          searchResult.map((item) => (
            <div key={item.id} style={{ padding: "1rem" }}>
              {item.name}
            </div>
          ))
        ) : (
          <div>No results</div>
        )}
      </div>
    </div>
  );
};

export default Search;