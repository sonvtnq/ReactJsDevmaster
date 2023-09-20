import React, { Component } from 'react'

export default class ProductItem extends Component {
    constructor(props){
        super(props)
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
                                defaultValue={1}
                                min={1}
                            />
                                <button data-product={1} className="btn btn-success">
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

