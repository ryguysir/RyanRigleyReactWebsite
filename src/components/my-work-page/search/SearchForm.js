import React from "react";
import "./app.css";
import "../../../App.css";

const SearchForm = ({ currentTags, setCurrentTags }) => {
  const searchBoxSubmit = (elem) => {
    setCurrentTags([]);
    setCurrentTags([elem.currentTarget.parentElement.firstChild.value]);
    elem.currentTarget.parentElement.firstChild.value = "";
  };
  const searchBoxKeypress = (elem) => {
    if (elem.key === "Enter") {
      setCurrentTags([]);
      setCurrentTags([elem.currentTarget.parentElement.firstChild.value]);
      elem.currentTarget.parentElement.firstChild.value = "";
    }
  };
  return (
    <div className="tag-search-field tag-search-field-hidden">
      <input type="text" onKeyPress={searchBoxKeypress} />
      <div className="tag-search-field-submit" onClick={searchBoxSubmit}>
        <i className="fas fa-chevron-right"></i>
      </div>
    </div>
  );
};

export default SearchForm;
