import React, { useContext } from "react";
import { CandidateContext } from "../contexts/CandidateContext";

const SearchBar = () => {
  const { setSearchTerm } = useContext(CandidateContext);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by status"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
