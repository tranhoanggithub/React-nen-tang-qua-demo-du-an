import React, { Component } from 'react'
import './BaiTapOanTuXi.css'
import Computer from './Computer'
import KetQuaTroChoi from './KetQuaTroChoi'
import {connect} from 'react-redux';
import Palyer from './Player'
 class BaiTapOanTuXi extends Component {
  render() {
    return (
      <div className="gameOanTuXi">
          <div className="row text-center mt-5">
            <div className="col-4">
                <Palyer/>
            </div>
            <div className="col-4 mt-3">
                <KetQuaTroChoi/>
                <button onClick={()=>{
                  this.props.playGame()
                }}>

                </button>
                <button className="btn btn-success p-3 display-4 mt-5">Play Game</button>
            </div>
            <div className="col-4 mt-3">
                <Computer/>
            </div>
          </div>
      </div>
    )
  }
}

const mapDispatchToProps =(dispatch)=>{
  return{
    playGame:()=>{

      //Khai BÁO Hàm lặp đi lặp lại
      let count=10;
      let randomComputerItem= setInterval(()=>{
        dispatch({
          type:'RAN_DOM'
        })
        count++;
        if(count>100 ){
          //Dừng hàm setInterval
          clearInterval(randomComputerItem)
          dispatch({
            type:'END_GAME',
          })
        }
      },100)

 
    }
  }
}


export default connect(null,mapDispatchToProps)(BaiTapOanTuXi)
