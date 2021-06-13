import React from "react";
import "./app.css";
import "../../../App.css";

const SearchForm = ({ currentTags, setCurrentTags }) => {
  return (
    <div className="tag-search-field tag-search-field-hidden">
      <input
        type="text"
        onChange={(e) => {
          if (e.target.value !== "") {
            setCurrentTags([e.target.value]);
          } else {
            setCurrentTags([]);
          }
        }}
      />
    </div>
  );
};

export default SearchForm;
