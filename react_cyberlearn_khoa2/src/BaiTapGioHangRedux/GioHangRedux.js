import React, { Component } from "react";

//sử dụng thư viện  connect   để lấy dữ liệu từ store về

import { connect } from "react-redux";

class GioHangRedux extends Component {
  render() {
    console.log(this.props.gioHang);
    return (
      <div>
        <div
          class="modal fade"
          id="modelId"
          tabindex="-1"
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content" style={{ minWidth: 800 }}>
              <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Mã sp</th>
                      <th>Hình ảnh</th>
                      <th>Tên sản phẩm</th>
                      <th>Gía</th>
                      <th>Số lượng</th>
                      <th>Thành tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.gioHang.map((spGH, index) => {
                      return (
                        <tr key={index}>
                          <td>{spGH.maSP}</td>
                          <td>
                            <img
                              src={spGH.hinhAnh}
                              alt={spGH.hinhAnh}
                              width={50}
                            />
                          </td>
                          <td>{spGH.gia.toLocaleString()}</td>
                          <td>
                            <button
                              className="btn btn-primary"
                              onClick={() => {
                                this.props.tangGiamSoLuong(spGH.maSP, true);
                              }}
                            >
                              +
                            </button>
                            {spGH.soLuong.toLocaleString()}
                            <button
                              className="btn btn-primary"
                              onClick={() => {
                                this.props.tangGiamSoLuong(spGH.maSP, false);
                              }}
                            >
                              -
                            </button>
                          </td>
                          <td>{(spGH.soLuong * spGH.gia).toLocaleString()}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                this.props.xoaGioHang(spGH.maSP);
                              }}
                            >
                              Xóa
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <th colSpan={5}></th>
                    <th>Tổng tiền</th>
                    <th>
                      {this.props.gioHang.reduce(
                        (tongTien, spGiohang, index) => {
                          return tongTien+=spGiohang.soLuong*spGiohang.gia;
                        },
                        0
                      ).toLocaleString()}
                    </th>
                  </tfoot>
                </table>
                <div class="container-fluid">Add rows here</div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//Hàm lấy state redux biến đổi thành props của component
const mapStateToProps = (state) => {
  // state là state tổng của ứng dụng chứa các state con(rootReducer)
  return {
    gioHang: state.stateGioHang.gioHang,
  };
};

//Hàm đưa dữ liệu lên reducer
const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (maSP) => {
      //Tạo action
      let action = {
        type: "XOA_GIO_HANG",
        maSP,
      };
      //Dùng phương thúc dispatch redux cung cấp để đưa dữ liệu lên reducer
      console.log(maSP);
      dispatch(action);
    },
    tangGiamSoLuong: (maSP, tangGiam) => {
      //tang giam=true=>Xử lý tăng-tangGiam=false=>Xử lý giảm
      let action = {
        type: "TANG_GIAM_SO_LUONG", //Thuộc tính bắt buộc để biết chạy vào case nào trong tất cả các reducer
        maSP,
        tangGiam,
      };
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux);
