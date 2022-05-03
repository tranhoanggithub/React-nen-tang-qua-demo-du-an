import React, { Component } from 'react'

export default class ProductItemEXC extends Component {
  render() {

    let {sanPhamProps}=this.props;
    return (
      
        <div class="card text-center">
          <img className=''s="card-img-top" src={sanPhamProps.hinhAnh} alt={sanPhamProps.hinhAnh} style={{width:300,height:300}}/>
          <div className=''lass="card-body">
            <h4 className="card-title">{sanPhamProps.tenSP}</h4>
            <p className="card-text">{sanPhamProps.giaBan.toLocaleString()}</p>
            <button className="btn btn-success" onClick={()=>{this.props.themGioHang(sanPhamProps)} }>Thêm giỏ hàng</button>
          </div>
        </div>
      
    )
  }
}
