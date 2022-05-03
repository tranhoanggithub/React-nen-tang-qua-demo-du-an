import React, { Component } from 'react'
import {connect} from 'react-redux';
 class Computer extends Component {
  render() {
    return (
        <div className="text-center playerGame">
        <div className="theThink">
          <img style={{transform:'rotate(90deg'}} className="mt-3" width={100} height={100} src={this.props.computer.hinhAnh} alt={this.props.computer.hinhAnh}/>
        </div>
        <img
          style={{ width:100, height: 100 }}
          src="./img/gameOanTuXi/playerComputer.png"
          alt="./img/gameOanTuXi/playerComputer.png"
        />
        <div className="row">
          <div className="col-4">
            <button className="btnItem">
              <img width={25} height={25} src="./img/gameOanTuXi/bao.png" />
            </button>
          </div>
          <div className="col-4">
              <button className="btnItem">
            <img width={25} height={25}  src="./img/gameOanTuXi/bua.png" />
            </button> 
          </div>
          <div className="col-4">
            <button className="btnItem">
              <img width={25} height={25}  src="./img/gameOanTuXi/keo.png" />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mangStateToProps =state =>{
  return{
    computer:state.BaiTapOanTuXiReducer.computer
  }
}


export default connect(mangStateToProps)(Computer)