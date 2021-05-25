import React from "react";

const SearchBttn = ({ showSearch }) => {
  return (
    <div className="tag search-bttn" onClick={showSearch}>
      Search
    </div>
  );
};

export default SearchBttn;
