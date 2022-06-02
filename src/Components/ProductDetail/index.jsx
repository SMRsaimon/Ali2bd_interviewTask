import React from "react";
import { useSelector } from "react-redux";
import ImageGelery from "./ImageGelery";
import RightSiteContent from "./RightSiteContent";

const ProductDetail = () => {
  const { error, loading, pdDetails } = useSelector((state) => {
    return {
      pdDetails: state.product.productDetails,
      loading: state.product.loading,
      error: state.product.error,
    };
  });

  if (loading) {
    return (
      <div
        style={{ height: "90vh" }}
        className="row d-flex justify-content-center align-items-center"
      >
        Loading.....
      </div>
    );
  } else {
    return (
      <div className="row">
        <div className="col-md-6">
          <ImageGelery gallery={pdDetails?.gallery} />
        </div>
        <div className="col-md-6">
          <RightSiteContent />
        </div>
      </div>
    );
  }
};

export default ProductDetail;
