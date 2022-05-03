import React, { Component } from "react";
import ProductList from "../ProductList";
import CartModal from "./CartModal";
import ProductListEXC from "./ProductListEXC";

export default class ExerciseCart extends Component {
  state = {
    gioHang: [
      
    ],
  };

  themGioHang = (sanPham) => {
    console.log(sanPham);
    let spGioHang = {
      maSP: sanPham.maSP,
      tenSP: sanPham.tenSP,
      donGia: sanPham.giaBan,
      soLuong: 1,
      hinhAnh: sanPham.hinhAnh,
    };

    let index =this.state.gioHang.findIndex(spGH=>spGH.maSP===spGioHang.maSP);

    if(index!=-1){
      // tìm thấy sản phẩm được click chứa trong giỏ hàng
      this.state.gioHang[index].soLuong+=1;

    }else
    {
      this.state.gioHang.push(spGioHang);
    }

    //push vào state  gio Hang  
    // this.state.gioHang.push(spGioHang);
    // let gioHangCapNhap = [...this.state.gioHang, spGioHang];
    this.setState({
      gioHang: this.state.gioHang
    });
  };

  xoaGioHang =(maSP)=>{
    //tHực hiện tính năng xóa giỏ hàng
    console.log(maSP);
    let index =this.state.gioHang.findIndex(spGioHang=>spGioHang.maSP===maSP);
    if(index!==-1){
      this.state.gioHang.splice(index,1);
    }
    this.setState({
      giohang:this.state.gioHang
    })
  }

  tinhTongSoLuong=()=>{
    let tongSoLuong=0;
    for(let i=0;i<this.state.gioHang.length;i++){
      let spGioHang =this.state.gioHang[i];
      tongSoLuong+=spGioHang.soLuong
    }
    return tongSoLuong;
  }

  render() {
    return (
      <div className="container-fluid">
        <h3 className="text-center">BÀI TẬP GIỎ HÀNG</h3>
        <div className="text-right">
          <span
            style={{ width: 17, cursor: "pointer" }}
            data-toggle="modal"
            data-target="#modelId"
          >
            <i class="fa-solid fa-cart-shopping">({this.tinhTongSoLuong()})Gio hang</i>
          </span>
        </div>
        <CartModal tangGiamSoLuong={this.tangGiamSoLuong} xoaGioHang={this.xoaGioHang} gioHang={this.state.gioHang} />
        <ProductListEXC themGioHang={this.themGioHang} />
      </div>
    );
  }
}
