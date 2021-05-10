import React from "react";

const SearchBttn = ({ showSearch }) => {
  return (
    <div className="tag" onClick={showSearch}>
      Search
    </div>
  );
};

export default SearchBttn;
