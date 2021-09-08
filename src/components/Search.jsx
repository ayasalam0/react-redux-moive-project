import React, { useState, useEffect } from "react";
import useAxios from "./useAxios.js";
import MovieCard from "./MovieCard.jsx";

const Search = ({ data }) => {
  const [searchField, setsearchField] = useState([]);

  const { Data, loading, setSearch, setLoading } = useAxios();

  function searched(e) {
    e.preventDefault();
    setsearchField(e.target.value);
  }
  function submitted(e) {
    e.preventDefault();
    setSearch(searchField);

    console.log(Data);
  }

  return (
    <>
      <input
        type="text"
        name="Search"
        placeholder="Search your movie"
        onChange={searched}
      />
      <button onClick={submitted}>submit</button>
    </>
  );
};

export default Search;
