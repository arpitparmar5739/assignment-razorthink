import React from "react";
import styles from "./index.module.css";

const PrimaryButton = ({ onClick, className, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`${className ? className + " " : ""}${styles.primaryButton}`}
      {...props}
    />
  );
};

export default PrimaryButton;
