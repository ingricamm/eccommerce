import TYPES from '../constants/productConstants';



function productListReducer(state={products:[]}, action) {
console.log(action);

  switch (action.type) {
    case TYPES.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case TYPES.PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case TYPES.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
 const productCategoryListReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (action.type) {
    case TYPES.PRODUCT_CATEGORY_LIST_REQUEST:
      return { loading: true };
    case TYPES.PRODUCT_CATEGORY_LIST_SUCCESS:
      return { loading: false, categories: action.payload };
    case TYPES.PRODUCT_CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

function productDetailsReducer(state={ product: { } }, action) {
  switch (action.type) {
    case TYPES.PRODUCT_DETAILS_REQUEST:
      return { loading: true };
    case TYPES.PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case TYPES.PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function productDeleteReducer(state={} , action) {
  switch (action.type) {
    case TYPES.PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case TYPES.PRODUCT_DELETE_SUCCESS:
      return { loading: false, product: action.payload, success: true };
    case TYPES.PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function productSaveReducer(state={product:{}} , action) {
  switch (action.type) {
    case TYPES.PRODUCT_SAVE_REQUEST:
      return { loading: true };
    case TYPES.PRODUCT_SAVE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case TYPES.PRODUCT_SAVE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
function productReviewSaveReducer(state={} , action) {
  switch (action.type) {
    case TYPES.PRODUCT_REVIEW_SAVE_REQUEST:
      return { loading: true };
    case TYPES.PRODUCT_REVIEW_SAVE_SUCCESS:
      return { loading: false, review: action.payload, success: true };
    case TYPES.PRODUCT_REVIEW_SAVE_FAIL:
      return { loading: false, errror: action.payload };
    case TYPES.PRODUCT_REVIEW_SAVE_RESET:
      return {};
    default:
      return state;
  }
}

export {
  productListReducer,
  productDetailsReducer,
  productSaveReducer,
  productDeleteReducer,
  productReviewSaveReducer,
  productCategoryListReducer,
};
