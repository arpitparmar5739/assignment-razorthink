import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.module.css";

const Modal = ({ isShowing, hide, children }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div
            className={styles.modalWrapper}
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div onClick={hide} className={styles.modalOverlay} />
            <div className={styles.modal}>
              <div className={styles.modalHeader}>
                <button
                  type="button"
                  onClick={hide}
                  className={styles.modalCloseButton}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              {children}
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
