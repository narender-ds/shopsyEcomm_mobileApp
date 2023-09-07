import { FETCH_PRODUCTS } from "../actions/ActionTypes";

const initialState={
    Products:[]
}

const ProductReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_PRODUCTS :
        return{
            ...state,
            Products:action.payload
        }
        default :
        return{
            state
        }
    }
} 

export default ProductReducer