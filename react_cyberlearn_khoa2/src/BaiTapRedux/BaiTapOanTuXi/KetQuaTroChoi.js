import React, { Component } from 'react'
import {connect} from 'react-redux'

 class KetQuaTroChoi extends Component {
  render() {
    return (
      <div>
          <div className="display-4 text-warning">{this.props.ketQua}</div>
          <div className="display-4 text-success" >Số bàn thắng:<span className="text-warning">{this.props.soBanThang}</span></div>
          <div className="display-4 text-succes">Tổng số bàn chơi:<span className="text-warning">{this.props.soBanChoi}</span></div>
      </div>
    )
  }
}

const mangStateToProps =state =>{
  return{
    ketQua:state.BaiTapOanTuXiReducer.ketQua,
    soBanThang:state.BaiTapOanTuXiReducer.soBanThang,
    soBanChoi:state.BaiTapOanTuXiReducer.soBanChoi,
  }
}

export default connect(mangStateToProps)(KetQuaTroChoi)