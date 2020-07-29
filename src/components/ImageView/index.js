import React, { useEffect, useState, useCallback } from "react";
import useModal from "../../hooks/useModal";
import Modal from "../../common/Modal";
import { UNSPLASH } from "../../app/App";
import { useHistory } from "react-router-dom";
import { toJson } from "unsplash-js";
import PrimaryButton from "../../common/PrimaryButton";
import styles from "./index.module.css";

const ImageView = ({ imageSearchKeyword, imageId }) => {
  const history = useHistory();
  const [image, setImage] = useState();
  const [error, setError] = useState();
  const { isShowing, hide } = useModal(imageId);

  const handleModalHide = useCallback(() => {
    history.push(`/${imageSearchKeyword}`);
    hide();
  }, [history, imageSearchKeyword, hide]);

  const handleDownloadPhoto = () => {
    UNSPLASH.photos
      .downloadPhoto(image)
      .then(toJson)
      .then((response) => {
        fetch(response.url).then((response) => {
          console.log(response);
          response.body
            .getReader()
            .read()
            .then((response) => {
              const url = window.URL.createObjectURL(
                new Blob([response.value]),
                {
                  type: "image/jpeg",
                }
              );
              const link = document.createElement("a");
              link.href = url;
              link.download = "download.jpg";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            });
        });
      });
  };

  useEffect(() => {
    setError(null);
    setImage(null);
    if (imageId) {
      UNSPLASH.photos
        .getPhoto(imageId)
        .then(toJson)
        .then((json) => {
          setImage(json);
        })
        .catch((error) => {
          console.log(error);
          setError(error);
        });
    } else {
      handleModalHide();
    }
  }, [imageId, handleModalHide]);

  const imageUrl = image && image.urls && image.urls.full;
  const imageAlt = image && image.alt_description;

  return (
    <Modal isShowing={isShowing} hide={handleModalHide}>
      {imageUrl && (
        <div>
          <div className={styles.modalImageContainer}>
            <img
              src={image.urls.full}
              width={"100%"}
              height={"100%"}
              alt={imageAlt || "Image"}
            />
            <PrimaryButton
              onClick={handleDownloadPhoto}
              className={styles.downloadButton}
            >
              Download Image
            </PrimaryButton>
          </div>
        </div>
      )}
      {error &&
        ((error.message && <div>{error.message}</div>) || (
          <div>{"Something went wrong!"}</div>
        ))}
    </Modal>
  );
};

export default ImageView;
