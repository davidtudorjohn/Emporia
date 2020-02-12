import React, { useState } from "react";
import data from "../../data";
const Search = props => {
  const [query, setQuery] = useState("");
  let filteredItems = data[props.category].filter(item => {
    return item.name.toLowerCase().indexOf(query) !== -1;
  });

  return (
    <div>
      <form id="searchForm" name="searchForm">
        <input
          type="text"
          placeholder="Search"
          onChange={e => setQuery(e.target.value.toLowerCase())}
        />
        <input type="submit" for="searchForm" />
      </form>
    </div>
  );
};
export default Search;
