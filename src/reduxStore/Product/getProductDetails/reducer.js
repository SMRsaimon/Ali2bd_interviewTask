import { PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_LOADING ,PRODUCT_DETAILS_ERROR} from "./actionTypes"

const initial_state = {
  productDetails: {},
  loading: false,
  err: false,
  
}

const productDetails = (state = initial_state, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_LOADING:
      return {
        ...state,
        loading: true,
      }
    case PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        productDetails: action.payload,
        err: false,
      }
    case PRODUCT_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        productDetails:{},
        err: action.payload,
      }
    default:
      return state
  }
}


export default productDetails