import React, { useEffect, useState } from "react";
import useGetPaginatedImagesByKeyword from "../../../hooks/useGetPaginatedImagesByKeyword";
import ImageContainer from "../ImageContainer";
import styles from "./index.module.css";
import PrimaryButton from "../../../common/PrimaryButton";
import { useHistory } from "react-router-dom";

const ImageListContainer = ({ imageSearchKeyword }) => {
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(1);

  const [images, totalPages, isLoading] = useGetPaginatedImagesByKeyword(
    imageSearchKeyword,
    currentPage
  );

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleImageClick = (id) => {
    history.push(`/${imageSearchKeyword}/${id}`);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [imageSearchKeyword]);

  return (
    <div>
      <div className={styles.imageListContainer}>
        {images &&
          images.map((image) => (
            <ImageContainer
              key={image.id}
              image={image}
              onImageClick={handleImageClick}
            />
          ))}
      </div>
      {currentPage < totalPages && (
        <div className={styles.loadMoreButtonContainer}>
          <PrimaryButton
            className={styles.loadMoreButton}
            onClick={handleLoadMore}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Load more"}
          </PrimaryButton>
        </div>
      )}
    </div>
  );
};

export default ImageListContainer;
