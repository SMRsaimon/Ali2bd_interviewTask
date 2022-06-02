import React, { useState } from "react";
import styles from "../.././resource/css/ProductDetails.module.css";
const VeriationCard = ({ name, values }) => {
  const [value, setValue] = useState(values);
  const [activeDetails, setActiveDetails] = useState("");

  const activeVariant = (data, index) => {
    const updateActiveStatus = value.map((x, inx) => {
      if (index === inx) {
        x.isActive = true;
      } else {
        x.isActive = false;
      }
      return x;
    });

    setValue(updateActiveStatus);

    setActiveDetails(data);
  };
  console.log(value, "value");
  return (
    <div className="card p-3 my-3">
      <div className="card-title mb-2">
        <span>
          {name && name}: {activeDetails && activeDetails.title}{" "}
        </span>{" "}
        <strong> </strong>
      </div>

      <div className="d-flex flex-wrap ">
        {value.length > 0 &&
          value.map((x, index) => (
            <div
              onClick={() => activeVariant(x, index)}
              className={
                x.isActive
                  ? styles.veriationSmallBoxActive
                  : styles.veriationSmallBox
              }
              key={x.id}
            >
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

export default React.memo(VeriationCard);
