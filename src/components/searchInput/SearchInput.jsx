import './search.css'

import React, { useState, useEffect } from "react";
import axios from "axios";



const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
};
function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = debounce((e) => {
    setSearchTerm(e.target.value);
  }, 500); // Debounce for 500ms

  useEffect(() => {
    const fetchBlog = async () => {
      if (searchTerm.length > 0) { // Only search if there's a term
        try {
          const response = await axios.get(`/getBlogByTitle/${searchTerm}`);
          setSearchResults(response.data.data); // Update search results
        } catch (error) {
          console.error(error);
          // Handle errors (optional)
        }
      } else {
        setSearchResults([]); // Clear results on empty search
      }
    };

    fetchBlog(); // Call on initial render and search term change
  }, [searchTerm]); // Dependency array for searchTerm

  // Display search results here (optional)






  return (
    <>
      <div id="search">
          <svg viewBox="0 0 420 60" xmlns="http://www.w3.org/2000/svg">
            <rect className="bar" />
            <g className="magnifier">
              <circle className="glass" />
              <line className="handle" x1={32} y1={32} x2={44} y2={44} />
            </g>
            <g className="sparks">
              <circle className="spark" />
              <circle className="spark" />
              <circle className="spark" />
            </g>
            <g className="burst pattern-one">
              <circle className="particle circle" />
              <path className="particle triangle" />
              <circle className="particle circle" />
              <path className="particle plus" />
              <rect className="particle rect" />
              <path className="particle triangle" />
            </g>
            <g className="burst pattern-two">
              <path className="particle plus" />
              <circle className="particle circle" />
              <path className="particle triangle" />
              <rect className="particle rect" />
              <circle className="particle circle" />
              <path className="particle plus" />
            </g>
            <g className="burst pattern-three">
              <circle className="particle circle" />
              <rect className="particle rect" />
              <path className="particle plus" />
              <path className="particle triangle" />
              <rect className="particle rect" />
              <path className="particle plus" />
            </g>
          </svg>
          <input
            type="search"
            name="q"
            aria-label="Search for inspiration"
            placeholder=""
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
        <div id="results"></div>
    </>
  )
}

export default SearchInput