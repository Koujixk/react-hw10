import axios from 'axios'
export const BASE_API_URL = 'http://178.62.221.120/api'

export const FETCH_PRODUCT = 'FETCH_PRODUCT'
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT'

export const getProducts = () => ({
    type: FETCH_PRODUCT
})
  
export const setProducts = (data) => ({
    type: RECEIVE_PRODUCT,
    payload: data
})

export const fetchProducts = () => {

    return async (dispatch, getState) => {
        dispatch(getProducts())
      try {
        const response = await axios.get(`${BASE_API_URL}/products`);
        dispatch(setProducts(response.data))
      } catch (error) {
        console.error(error);
      }
    }
}

export const createProducts = () => {

    return async (dispatch, getState) => {
        dispatch(getProducts())
      try {
        const response = await axios.post(`${BASE_API_URL}/products/create`, payload);
        dispatch(setProducts(response.data))
      } catch (error) {
        console.error(error);
      }
    }
}
