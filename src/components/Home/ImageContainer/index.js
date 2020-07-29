import React from "react";
import styles from "./index.module.css";

const ImageContainer = ({ image, onImageClick }) => {
  const {
    id,
    user: {
      name: userName,
      profile_image: { medium: userProfileImage },
    },
    urls: { thumb },
  } = image;

  const handleImageClick = () => {
    onImageClick(id);
  };

  return (
    <div
      className={styles.imageContainer}
      style={{
        background: `url(${thumb})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      onClick={handleImageClick}
    >
      <div className={styles.userInformation}>
        <img src={userProfileImage} alt="User Profile" />
        <p>
          Image by <span>{userName}</span>
        </p>
      </div>
    </div>
  );
};

export default ImageContainer;
