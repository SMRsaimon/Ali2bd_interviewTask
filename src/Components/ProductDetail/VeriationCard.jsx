import React from "react";
import styles from "../.././resource/css/ProductDetails.module.css";
const VeriationCard = ({ name, values }) => {
  console.log(values, "values");
  return (
    <div className="card p-3 my-3">
      <div className="card-title mb-2">
        <span>{name && name}: </span> <strong> </strong>
      </div>

      <div className="d-flex flex-wrap ">
        {values.length > 0 &&
          values.map((x, index) => (
            <div className={styles.veriationSmallBox} key={x.id}>
              {x.thumb ? (
                <img src={x.thumb} alt={x.name} />
              ) : (
                <span> {x.name} </span>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default VeriationCard;
