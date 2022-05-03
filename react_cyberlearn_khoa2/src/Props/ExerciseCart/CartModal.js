import React, { Component } from "react";

export default class CartModal extends Component {
  renderCart = () => {
    let { gioHang } = this.props;
    return gioHang.map((spGioHang, index) => {
      return (
        <tr key={index}>
          <td>{spGioHang.maSP}</td>
          <td>
            <img
              style={{ width: 50, height: 50 }}
              src={spGioHang.hinhAnh}
              alt={spGioHang.hinhAnh}
            />
          </td>
          <td>{spGioHang.tenSP}</td>

          <td>
            <button className="btn btn-success" onClick={() => {this.props.tangGiamSoLuong(spGioHang.maSP,1)}}>
              +
            </button>
            {spGioHang.soLuong.toLocaleString()}
            <button className="btn btn-success" onClick={() => {this.props.tangGiamSoLuong(spGioHang.maSP,-1)}}>
              -
            </button>
          </td>
          <td>{spGioHang.donGia.toLocaleString()}</td>
          <td>{(spGioHang.donGia * spGioHang.soLuong).toLocaleString()}</td>
          <td>
            <button
              onClick={() => {
                this.props.xoaGioHang(spGioHang.maSP);
              }}
              className="btn btn-danger"
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  tangGiamSoLuong=(maSP,number)=>{
    let gioHang =[...this.state.gioHang];

    let index =gioHang.findIndex(spGioHang=>spGioHang.maSP===maSP);
    if(index!=-1)
    {
      if(gioHang[index].soLuong<1 && number===-1){
        alert('Số lượng tối thiểu ít nhất là 1')
        return;
      }
      //Tìm ra sp Gio Hang thứ index
      gioHang[index].soLuong+=number;
    }

    //render và gán lại giá trị state.gioHang
    this.setState({
      gioHang:gioHang
    })
  }
  tinhTongTien=()=>{
    let {gioHang}=this.props;
    return gioHang.reduce((tongTien,spGioHang,index)=>{
        return tongTien+=spGioHang.soLuong*spGioHang.donGia;
    },0).toLocaleString();  }

  render() {
    let { gioHang } = this.props;
    return (
      <div>
        <div>
          {/* Button trigger modal */}

          {/* Modal */}
          <div
            className="modal fade"
            id="modelId"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="modelTitleId"
            aria-hidden="true"
          >
            <div
              style={{ minWidth: 1000 }}
              className="modal-dialog"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Gio hàng</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Mã SP</th>
                        <th>Hình ảnh</th>
                        <th>Tên SP</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>{this.renderCart()}</tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="5"></td>
                        <td>Tổng tiền</td>
                        <td>{this.tinhTongTien()}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
