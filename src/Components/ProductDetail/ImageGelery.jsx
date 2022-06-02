import React from "react";
import styles from "../../resource/css/ProductDetails.module.css";

const ImageGelery = ({ gallery }) => {
  return (
    <div className={`${styles.imageGeleryWrapper} `}>
      <div className={styles.leftImageWraper}>
        <img src={gallery?.[1]?.url} />
        <img src={gallery?.[2]?.url} />
      </div>
      <div className={styles.rightImageWraper}>
        <img src={gallery?.[0]?.url} />
      </div>
    </div>
  );
};

export default ImageGelery;
