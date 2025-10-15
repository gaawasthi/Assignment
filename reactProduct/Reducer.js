export const initialState = {
  products: [],
  product: {},
  loading: false,
  user: null,
};

export const ProductReducer = (state, action) => {
  switch (action.type) {
    case 'Fetch_Start':
      return {
        ...state,
        loading: true,
      };
    case 'Fetch_Success':
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case 'LoadingFalse':
      return {
        ...state,
        loading: false,
      };

    case 'Fetch_single_Product':
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case 'set_single_product':
      return {
        ...state,
        product:  action.payload ,
      };
     case 'set_user':
        return{

        } 



    default:
      return state;
  }
};
