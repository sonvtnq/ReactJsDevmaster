import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MSG_DELETE_SUCESS, MSG_UPDATE_SUCESS } from '../redux/constant/mesage'
import { act_change_notify, act_delete_product, act_update_product } from '../redux/actions/actions'

class CartItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: 0,
        }
    }
    // hàm xử lý sư kiện xóa sp trong giỏ hàng
    handleDelete = (productInCart) => {
        if (window.confirm("Bạn có muốn xóa sản phẩm ra khỏi giỏ hàng không ?")) {
            this.props.deleteItem(productInCart)
            this.props.changeNotify(MSG_DELETE_SUCESS)
        }
    }
    handleUpdate = (productInCart, quantity) => {
        this.props.updateItem(productInCart, quantity)
        this.props.changeNotify(MSG_UPDATE_SUCESS)
    }
    componentDidUpdate=(prevProps)=> {
        if (this.props.carts !== prevProps.carts) {
            this.setState({
                quantity : this.props.renderCartItem.quantity
            })
        }
    }
    render() {
        let renderedCart = this.props.renderCartItem.product

        let quantity = this.state.quantity==0?this.props.renderCartItem.quantity:this.state.quantity
        console.log(this.props.renderCartItem.quantity);
        console.log(this.state.quantity);
        return (
            <tr>
                <th scope="row">{this.props.rollNo}</th>
                <td>{renderedCart.name}</td>
                <td>{renderedCart.price} USD</td>
                <td>
                    <input
                        name="cart-item-quantity-1"
                        type="number"
                        value={this.state.quantity==0?this.props.renderCartItem.quantity:this.state.quantity}
                        min={1}
                        onChange={(e) => { this.setState({ quantity: e.target.value })}}
                    />
                </td>
                <td>
                    <strong>{renderedCart.price * quantity} USD</strong>
                </td>
                <td>
                    <a
                        className="label label-info update-cart-item"
                        href="#"
                        data-product=""
                        onClick={() => { this.handleUpdate(renderedCart, quantity) }}
                    >
                        Update
                    </a>
                    <a
                        className="label label-danger delete-cart-item"
                        href="#"
                        data-product=""
                        onClick={() => this.handleDelete(renderedCart)}
                    >
                        Delete
                    </a>
                </td>
            </tr>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeNotify: (message) => {
            dispatch(act_change_notify(message));
        },
        deleteItem: (product) => {
            dispatch(act_delete_product(product))
        },
        updateItem: (product, quantity) => {
            dispatch(act_update_product(product, quantity))
        }
    }
}
const mapStateToProps = state =>{
    return{
        carts:state.cart
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartItem) 