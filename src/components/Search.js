import React, {useState} from "react";

function Search({searchTerm}) {
  const [searchState, setSearchState] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    searchTerm(searchState);
  }

  function handleSearchChange(value) {
    setSearchState(value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchState}
        onChange={(e) => handleSearchChange(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
