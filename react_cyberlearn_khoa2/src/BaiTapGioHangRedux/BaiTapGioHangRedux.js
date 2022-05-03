import React, { Component } from "react";
import GioHangRedux from "./GioHangRedux";
import ProductListRedux from "./ProductListRedux";

//import  thư viện connect kết nối react component  - redux store
import {connect} from 'react-redux';

 class BaiTapGioHangRedux extends Component {

  renderSoLuong=()=>{
    return this.props.gioHang.reduce((tongSoLuong,spGH,index)=>{
      return tongSoLuong+=spGH.soLuong;
    },0).toLocaleString();
  }
  render() {
    console.log(this.props.gioHang)
    return (
      <div className="container">
        <h3>Danh sách sản phẩm</h3>
        <div className="text-right">
          <span
            style={{ width: 17, cursor: "pointer" }}
            data-toggle="modal"
            data-target="#modelId"
          >
            <i class="fa-solid fa-cart-shopping">({this.renderSoLuong()})Gio hang</i>
          </span>
        </div>

        <ProductListRedux />
        <GioHangRedux />
      </div>
    );
  }
}

//Viết hàm lấy giá trị từ redux store về biến thành props component

const mapStateToProps =(state)=>{
  return{
    gioHang:state.stateGioHang.gioHang
  }
}

export default connect(mapStateToProps)(BaiTapGioHangRedux)
