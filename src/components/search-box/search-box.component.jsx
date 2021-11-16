import React from "react";

import "./search-box.styles.css";

export const SearchBox = ({ placeholder, onChangeHandler }) => {
  return (
    <input
      onChange={onChangeHandler}
      className="search"
      type="search"
      placeholder={placeholder}
    />
  );
};
