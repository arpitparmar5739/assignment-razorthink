import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import ImageListContainer from "./ImageListContainer";
import ImageView from "../ImageView";

const Home = ({ match }) => {
  const [imageId, setImageId] = useState(null);
  const [imageSearchKeyword, setImageSearchKeyword] = useState("");

  const handleImageSearchKeywordChange = (imageSearchKeyword) => {
    setImageSearchKeyword(imageSearchKeyword);
  };

  useEffect(() => {
    if (match.params && match.params.searchKeyword) {
      setImageSearchKeyword(match.params.searchKeyword);
      if (match.params.imageId) {
        setImageId(match.params.imageId);
      } else {
        setImageId("");
      }
    }
  }, [match.params, match.params.searchKeyword]);

  return (
    <div>
      <SearchBar
        imageSearchKeyword={imageSearchKeyword}
        onImageSearchKeywordChange={handleImageSearchKeywordChange}
      />
      <ImageListContainer imageSearchKeyword={imageSearchKeyword} />
      <ImageView imageId={imageId} imageSearchKeyword={imageSearchKeyword} />
    </div>
  );
};

export default Home;
