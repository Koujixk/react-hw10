import { FETCH_PRODUCT, RECEIVE_PRODUCT } from "./actions";

const initialState = {
    products: [],
    productsLoading: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCT:
            return{
                ...state,
                productsLoading: true
            }
        case RECEIVE_PRODUCT:
            return{
                ...state,
                productsLoading: false,
                products: action.payload
            }
        default:
            return state
    }
} 