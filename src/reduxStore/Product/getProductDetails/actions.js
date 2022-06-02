import { get } from "../../../Helper/api_helper";
import {
  PRODUCT_DETAILS_ERROR,
  PRODUCT_DETAILS_LOADING,
  PRODUCT_DETAILS_SUCCESS,
} from "./actionTypes";

export const getProductDetailsLoading = (data) => {
  return {
    type: PRODUCT_DETAILS_LOADING,
  };
};
export const getProductDetailsSuccess = (data) => {
  return {
    type: PRODUCT_DETAILS_SUCCESS,
    payload: data,
  };
};

export const getProductDetailsError = (data) => {
  return {
    type: PRODUCT_DETAILS_ERROR,
    payload: data,
  };
};

export const fetchProductDetails = () => async (dispatch) => {
  dispatch(getProductDetailsLoading());

  try {
    const data = await get("/customer/dummy-product");
    console.log(data);
    dispatch(getProductDetailsSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(getProductDetailsError(error));
  }
};
