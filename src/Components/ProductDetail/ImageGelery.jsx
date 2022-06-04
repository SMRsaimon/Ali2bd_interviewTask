import React from "react";
import { useSelector } from "react-redux";
import styles from "../../resource/css/ProductDetails.module.css";
import { geSelectedVarientImageLink } from "./../../Helper/productDetails";

const ImageGelery = ({ gallery }) => {
  const activeVeriants = useSelector((state) => state.product.activeVeriants);
  return (
    <div className={`${styles.imageGeleryWrapper} `}>
      {geSelectedVarientImageLink(activeVeriants, "Color") ? (
        <img
          className={styles.singleImageFullWidth}
          src={geSelectedVarientImageLink(activeVeriants, "Color")}
        />
      ) : (
        <>
          {" "}
          <div className={styles.leftImageWraper}>
            <img src={gallery?.[1]?.url} />
            <img src={gallery?.[2]?.url} />
          </div>
          <div className={styles.rightImageWraper}>
            <img src={gallery?.[0]?.url} />
          </div>
        </>
      )}
    </div>
  );
};

export default ImageGelery;
