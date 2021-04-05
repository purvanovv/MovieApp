import React from "react";

const SearchBox = (props) => {
  const { onSearch, searchValue } = props;
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        value={searchValue}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Type to search..."
      ></input>
    </div>
  );
};

export default SearchBox;
