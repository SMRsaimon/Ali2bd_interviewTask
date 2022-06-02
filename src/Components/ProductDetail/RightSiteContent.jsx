import React from "react";
import { useSelector } from "react-redux";
import styles from "../../resource/css/ProductDetails.module.css";
import VeriationCard from "./VeriationCard";

const RightSiteContent = () => {
  const pdDetails = useSelector((state) => state.product.productDetails);
  return (
    <div className={`${styles.rightSiteWrapper}`}>
      <div className="card p-2 bg_primary">
        <h4>Product Title: </h4>
      </div>
      <div className="card p-2 bg_white shadow my-3">
        <p>
          <strong>Price: </strong>{" "}
          <strong className={styles.offerPrice}>Rs. 2499 </strong>{" "}
          <del className={styles.mainPrice}>Rs. 2499 </del>{" "}
          <strong className={styles.discount}> (50% OFF) </strong>
        </p>
      </div>

      {pdDetails?.variation?.props?.map((x, index) => (
        <VeriationCard key={x.id} name={x.name} values={x.values} />
      ))}
    </div>
  );
};

export default RightSiteContent;
