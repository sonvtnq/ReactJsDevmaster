import {LIST_PRODUCT} from "../constant/actionTypes"
import {listProduct} from "../../data/Data"
const initialState=[
    ...listProduct
]

// console.log(initialState);

const ListProductReducer=(state = initialState, action)=>{
    switch (action.type){
        case LIST_PRODUCT:
            return state;
        default: 
            return state
    }
}

export default ListProductReducer