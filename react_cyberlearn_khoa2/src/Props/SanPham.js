import React, { Component } from "react";

export default class SanPham extends Component {
  render() {

    let {sanPhamProps} =this.props;

    return (
      <div>
        <div className="card text-left">
          <img
            style={{ width: 250, height: 250, marginLeft: 30 }}
            className="card-img-top"
            src={sanPhamProps.hinhAnh}
            alt={sanPhamProps.hinhAnh}
          />
          <div className="card-body">
            <h4 className="card-title">{sanPhamProps.tenSP}</h4>
            <p className="card-text">{sanPhamProps.giaBan}</p>
            <button
              onClick={() => {
               this.props.XemChitiet(sanPhamProps)
              }}
              className="btn btn-success"
            >
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    );
  }
}
