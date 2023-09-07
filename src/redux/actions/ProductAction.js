import { FETCH_PRODUCTS } from "./ActionTypes";
import axios from 'axios';

export const fetchProduct =(product)=>({
    type: FETCH_PRODUCTS,
    payload: product,
})
export const getProduct = () => {
    return function (dispatch) {
      axios
        .get(`https://dummyjson.com/products`)
        .then((res) => {
          dispatch(fetchProduct(res.data));
        })
        .catch((error) => console.log("error", error));
    };
  };
  