import React, { Component } from 'react'
import { MSG_BUY_SUCESS } from '../redux/constant/mesage'
import { connect } from 'react-redux'
import { act_buy_product, act_change_notify } from '../redux/actions/actions'

class ProductItem extends Component {
    constructor(props){
        super(props)
        this.state ={
            quantity:1,
        }
    }
    handleBuy = (product)=>{
        this.props.buyItem(product,this.state.quantity)
        this.props.changeNotify(MSG_BUY_SUCESS)
    }
    render() {
        return (
            <div>
                <div className="media product">
                    <div className="media-left">
                        <a href="#">
                            <img
                                className="media-object"
                                src={this.props.img}
                                alt="charmander"
                            />
                        </a>
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">{this.props.name}</h4>
                        <p>
                            {this.props.description}
                        </p>
                        {
                            this.props.quantityRemain >0 ? <><input
                                name="quantity-product-1"
                                type="number"
                                value={this.state.quantity}
                                min={1}
                                // max={this.props.quantityRemain}
                                onChange={(e)=>this.setState({quantity:e.target.value})}
                            />
                                <button data-product={1} className="btn btn-success"
                                    onClick={()=>this.handleBuy(this.props.product)}
                                >
                                    Mua hàng
                                </button>
                                <a data-product={1} href="#" className="price">
                                    {this.props.price} USD
                                </a></> : <span className="price"> {this.props.price} USD</span>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyItem: (product, quantity) => {
            dispatch(act_buy_product(product, quantity));
        },
        changeNotify: (message) => {
            dispatch(act_change_notify(message));
        },
    };
};

export default connect(null,mapDispatchToProps)(ProductItem) 