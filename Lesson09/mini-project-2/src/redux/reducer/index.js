import {combineReducers} from "redux"
import ListProductReducer from "./listproduct"
import cartReducer from "./cart"
import notifyReducer from "./notify"

const RootReducer=combineReducers({
    listProduct: ListProductReducer,
    cart:cartReducer,
    notify: notifyReducer
})

export default RootReducer