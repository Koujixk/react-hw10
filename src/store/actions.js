import axios from 'axios';
export const BASE_API_URL = 'http://178.62.221.120/api';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const TOGGLE_MODAL_STATE = 'TOGGLE_MODAL_STATE'
export const EDIT_PRODUCT = 'EDIT_PRODUCT'

export const getProducts = () => ({
  type: FETCH_PRODUCTS
})

export const setProducts = (data) => ({
  type: RECEIVE_PRODUCTS,
  payload: data
})
export const deleteProducts = (id) => ({
  type: DELETE_PRODUCT,
  payload: id
})
export const togglingModal = (state) => ({
  type: TOGGLE_MODAL_STATE,
  isOpen: state
})
export const editProduct = (product) => ({
  type: EDIT_PRODUCT
  payload: payload
})

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(getProducts());
    try {
      const response = await axios.get(`${BASE_API_URL}/products`);
      dispatch(setProducts(response.data))
    } catch (error) {
      console.error(error);
    }
  }
}

export const createProduct = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${BASE_API_URL}/products/create`, payload);
      console.log('response', response)
      if (response.status === 201) {
        dispatch(fetchProducts())
      }
      console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  }
}

export const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`${BASE_API_URL}/products/delete/${id}`);
      console.log('response', response)
      if (response.status === 204) {
        dispatch(fetchProducts())
      }
      console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  }
}