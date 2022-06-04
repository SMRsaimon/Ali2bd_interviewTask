import React from "react";
import { useSelector } from "react-redux";
import styles from "../../resource/css/ProductDetails.module.css";
import { getPercentOfDiscount } from "./../../Helper/productDetails";
import VeriationCard from "./VeriationCard";

const RightSiteContent = () => {
  const { pdDetails, price } = useSelector((state) => {
    return {
      pdDetails: state.product.productDetails,
      price: state.product.updatedPrice,
    };
  });
  return (
    <div className={`${styles.rightSiteWrapper}`}>
      <div className="card p-2 bg_primary">
        <p>
          <strong> Product Title: </strong>
          <span> {pdDetails.title}</span>
        </p>
      </div>
      <div className="card p-2 bg_white shadow my-3">
        <p>
          <strong>Price: </strong>{" "}
          <strong className={styles.offerPrice}>Rs. {price?.discounted}</strong>{" "}
          <del className={styles.mainPrice}>Rs. {price?.old} </del>{" "}
          <strong className={styles.discount}>
            ( {getPercentOfDiscount(price?.old, price?.discounted)}% OFF)
          </strong>
        </p>
      </div>

      {pdDetails?.variation?.props?.map((x, index) => (
        <VeriationCard key={x.id} name={x.name} values={x.values} />
      ))}
    </div>
  );
};

export default RightSiteContent;
