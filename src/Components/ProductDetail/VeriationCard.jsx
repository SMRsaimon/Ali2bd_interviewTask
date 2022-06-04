import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../.././resource/css/ProductDetails.module.css";
import { activeVeriantDetails } from "../../reduxStore/Product/getProductDetails/actions";
import { clearActiveVeriantDetails } from "./../../reduxStore/Product/getProductDetails/actions";
const VeriationCard = ({ name, values }) => {
  const [value, setValue] = useState(values);
  const dispatch = useDispatch();
  const activeDetails = useSelector((state) => state.product.activeVeriants);

  const activeVariant = (data, index) => {
    data.vType = name;
    const updateActiveStatus = value.map((x, inx) => {
      if (index === inx && x.isActive) {
        x.isActive = false;

        dispatch(clearActiveVeriantDetails(data));
      } else if (index === inx && !x.isActive) {
        x.isActive = true;
        dispatch(activeVeriantDetails(data));
      } else {
        x.isActive = false;
      }

      console.log(x);
      return x;
    });

    setValue(updateActiveStatus);
  };
  console.log(value);
  return (
    <div className="card p-3 my-3">
      <div className="card-title mb-2">
        <span>
          {/* {name && name}: {activeDetails && activeDetails.title}{" "} */}
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
