import React, { Component } from 'react'
// import { listProduct } from '../data/Data'
import ProductItem from './ProductItem'
import {connect } from "react-redux"

class ListProducts extends Component {
    render() {
        // console.log(this.props.products);
        return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h1 className="panel-title">List Products</h1>
                    </div>
                    <div className="panel-body" id="list-product">
                        {/* <ProductItem
                            images=
                        /> */}
                        {
                            this.props.products.map(
                                (product, index) => <ProductItem
                                    key={index}
                                    img={product.img}
                                    name={product.name}
                                    description={product.description}
                                    quantityRemain={product.quantityRemain}
                                    price={product.price}
                                    product={product}
                                />)
                        }
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state=>{
    return{
        products: state.listProduct
    }
}
export default connect(mapStateToProps,null)(ListProducts)
