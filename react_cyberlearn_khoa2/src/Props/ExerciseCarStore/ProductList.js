import React, { Component } from 'react'
import ProductItem from '../ProductItem'

export default class ProductList extends Component {



    renderProductItem =()=>{
      //Thuộc tính this.props.ite, lấy từ ExerciseCarStoreComponent
        return this.props.productData.map((product,index)=>{
            return <div className="col-3" key={index}>
                    <ProductItem item ={product}/>
            </div>
        })
    } 


  render() {
    
    return (
      <div className="container">
          <div className='row'>
            {this.renderProductItem()}
          </div>
      </div>
    )
  }
}
