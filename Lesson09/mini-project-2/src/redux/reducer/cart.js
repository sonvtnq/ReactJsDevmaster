// Sử dụng các chức năng trong giỏ hàng: buy, delete, update
import * as actionTypes from "../constant/actionTypes"

//Sử dụng localStorage
import { LOCAL_STOREAGE_NAME } from "../constant/localStorageName"

// khởi tạo state quản lý giỏ hàng
let initialState

// kiểm tra xem mua lần đầu tiên hay mua thêm
const shoppingCartLocal = JSON.parse(localStorage.getItem(LOCAL_STOREAGE_NAME))

initialState = (shoppingCartLocal != null && shoppingCartLocal.length >= 0) ? shoppingCartLocal : []

// hàm getIndexItem xem sản phẩm có trong giỏ hàng hay chưa
const getIndexItem = (item, cart) => {
    if (cart == null || cart.length == 0 || item == null) {
        return -1;
    } else {
        for (let i = 0; i < cart.length; i++) {
            // console.log(cart[i]);
            if (item.Id === cart[i].product.Id) {
                return i
            }
        }
    }
    return -1
}
// tạo reducer
const cartReducer = (state = initialState, action) => {
    // lấy sản phẩm, số lượng từ action
    let { product, quantity } = action
    let item = { product, quantity }

    // tùy theo chức năng (type) để xác định mua hàng/cập nhật/xóa
    let index = getIndexItem(product, state)
    // console.log(index);
    switch (action.type) {
        case actionTypes.BUY_ITEM: // mua hàng
            if (index >= 0) { // sản phẩm mua đã có trong giỏ hàng, thực hiện cập nhật số lượng
                state[index].quantity = parseInt(state[index].quantity) + parseInt(quantity)
            } else {
                // nếu sản phẩm mua là mới, chưa có trong giỏ hàng
                state.push(item);
            }

            // cập nhật lại local storage
            localStorage.setItem(LOCAL_STOREAGE_NAME, JSON.stringify(state))
            return [...state];
        case actionTypes.DELETE_ITEM: // xóa sp trong giỏ hàng

            if (index >= 0) {
                state.splice(index, 1)
            }

            // cập nhật lại local storage
            localStorage.setItem(LOCAL_STOREAGE_NAME, JSON.stringify(state))
            return [...state];
        case actionTypes.UPDATE_ITEM: // câp nhật giỏ hàng
            if (index >= 0) {
                state[index].quantity = quantity
            }
            // cập nhật lại local storage
            localStorage.setItem(LOCAL_STOREAGE_NAME, JSON.stringify(state))
            return [...state];
        default:
            return state
    }

}

export default cartReducer