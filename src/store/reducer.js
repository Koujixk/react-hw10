import { 
    FETCH_PRODUCTS, 
    SET_EDIT_PRODUCT,
    RECEIVE_PRODUCTS,
    TOGGLE_MODAL_STATE

  } from './actions';
  
  const initialState = {
    products: [],
    productsLoading: false,
    isModalOpen: false,
    editingProduct: null
  }
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case TOGGLE_MODAL_STATE:
        return{
          ...state,
          isModalOpen: action.isOpen
        }
      case FETCH_PRODUCTS: 
        return {
          ...state,
          productsLoading: true
        }
      case RECEIVE_PRODUCTS: 
        return {
          ...state,
          productsLoading: false,
          products: action.payload
        }
      case SET_EDIT_PRODUCT:
        console.log('set', action.payload)
        return{
          ...state,
          editingProduct: action.payload 
        }  
      default:
        return state;
    }
  }