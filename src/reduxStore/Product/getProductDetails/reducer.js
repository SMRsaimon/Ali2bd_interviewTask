import {
  ACTIVE_VERINT_PD_DETAILS,
  CLEAR_ACTIVE_VERINT_PD_DETAILS,
  PRODUCT_DETAILS_ERROR,
  PRODUCT_DETAILS_LOADING,
  PRODUCT_DETAILS_SUCCESS,
} from "./actionTypes";

const initial_state = {
  productDetails: {},
  loading: false,
  err: false,
  activeVeriants: [],
  updatedPrice: {},
  skus: {},
};

const productDetails = (state = initial_state, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        productDetails: action.payload,
        err: false,
        updatedPrice: action.payload.price,
      };
    case PRODUCT_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        productDetails: {},
        err: action.payload,
      };
    case ACTIVE_VERINT_PD_DETAILS:
      const newVariations = [...state.activeVeriants];
      if (newVariations.length) {
        const checkVarientMatchData = newVariations.find(
          (value) => value.vType === action.payload.vType
        );

        if (checkVarientMatchData) {
          const matchingIndex = newVariations.findIndex(
            (x) => x.vType === checkVarientMatchData.vType
          );
          newVariations.splice(matchingIndex, 1, action.payload);
        } else {
          newVariations.push(action.payload);
        }
      } else {
        newVariations.push(action.payload);
      }

      let skusIndex = state.productDetails.variation.skus.findIndex((item) => {
        if (newVariations.length === item.props.length) {
          return newVariations.every((value, index) => {
            return item.props.includes(value.id);
          });
        }
      });

      const matchSkus = state.productDetails.variation.skus[skusIndex];

      if (matchSkus?.price) {
        return {
          ...state,
          activeVeriants: [...newVariations],
          skus: matchSkus,
          updatedPrice: {
            ...state.updatedPrice,
            discounted: matchSkus.price.discounted,
            old: matchSkus.price.old,
          },
        };
      } else {
        return {
          ...state,
          activeVeriants: [...newVariations],
          skus: matchSkus,
        };
      }

    case CLEAR_ACTIVE_VERINT_PD_DETAILS:
      const variaTionsNew = [...state.activeVeriants];
      const matchingIndex = variaTionsNew.findIndex(
        (x) => x.vType === action.payload.vType
      );
      variaTionsNew.splice(matchingIndex, 1);

      return {
        ...state,
        activeVeriants: [...variaTionsNew],
        skus: {},
        updatedPrice: state.productDetails.price,
      };
    default:
      return state;
  }
};

export default productDetails;
