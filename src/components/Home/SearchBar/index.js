import React, { useState, useEffect } from "react";
import PrimaryButton from "../../../common/PrimaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import styles from "./index.module.css";

const SearchBar = ({ imageSearchKeyword, onImageSearchKeywordChange }) => {
  const [searchBarInputValue, setSearchBarInputValue] = useState("");
  const placeholder = "Search for images here...";

  const handleOnImageSearchKeywordChange = () => {
    onImageSearchKeywordChange(searchBarInputValue);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleOnImageSearchKeywordChange();
    }
  };

  const handleSearchBarInputValueChange = (event) => {
    setSearchBarInputValue(event.target.value);
  };

  useEffect(() => {
    setSearchBarInputValue(imageSearchKeyword);
  }, [imageSearchKeyword]);

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        value={searchBarInputValue}
        placeholder={placeholder}
        className={styles.searchBarInputBox}
        onChange={handleSearchBarInputValueChange}
      />
      <PrimaryButton
        className={styles.searchButton}
        onClick={handleOnImageSearchKeywordChange}
      >
        <FontAwesomeIcon icon={faSearch} />
      </PrimaryButton>
    </div>
  );
};

export default SearchBar;
