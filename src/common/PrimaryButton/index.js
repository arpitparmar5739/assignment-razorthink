import React from "react";
import styles from "./index.module.css";

const PrimaryButton = ({ onClick, className, disabled, ...props }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className ? className + " " : ""}${styles.primaryButton}`}
      {...props}
    />
  );
};

export default PrimaryButton;
