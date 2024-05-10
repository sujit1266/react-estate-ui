import "./searchBar.scss";
import { useState } from "react";
import React from 'react'
const types = ["buy", "rent"];


export default function SearchBar() {

  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0
  })

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }))
  }

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type, index) => (
          <button onClick={() => switchType(type)} key={index} className={query.type===type ? "active" : ""}>{type}</button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="City Location"></input>
        <input type="number" name="minPrice" min={0} max={100000} placeholder="Min Price"></input>
        <input type="number" name="maxPrice" min={0} max={100000} placeholder="Max Price"></input>
        <button>
          <img src="/search.png"></img>
        </button>
      </form>
    </div>
  )
}
