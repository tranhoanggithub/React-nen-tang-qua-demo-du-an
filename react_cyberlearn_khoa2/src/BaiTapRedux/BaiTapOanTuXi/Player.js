import React, { Component } from "react";
import { connect } from "react-redux";

 class Player extends Component {
  render() {

    console.log(this.props.mangDatCuoc)
    return (
      <div className="text-center playerGame">
        <div className="theThink">
          <img style={{transform:'rotate(90deg'}} className="mt-3" width={100} height={100} src={this.props.mangDatCuoc.find(item=>item.datCuoc===true).hinhAnh}
          alt={this.props.mangDatCuoc.find(item=>item.datCuoc===true).hinhAnh}
          />
        </div>
        <img
          style={{ width:100, height: 100 }}
          src="./img/gameOanTuXi/player.png"
          alt="./img/gameOanTuXi/player.png"
        />
        <div className="row">
        {this.props.mangDatCuoc.map((item,index)=>{

          // Xét giá trị cược thêm viền cho item được chọn

          let border={};
          if(item.datCuoc){
            border ={border:'3px solid orange'};
          }
          return  <div className=""col-4>
            <button onClick={()=>{
              this.props.datCuoc(item.ma);
            }} style={border} className="btnItem">
            <img width={50} height={50} src={item.hinhAnh} alt={item.hinhAnh}/>
            </button>
          </div>
        })}
        </div>
      </div>
    );
  }
}
const mangStateToProps = state =>{
  return {
    mangDatCuoc:state.BaiTapOanTuXiReducer.mangDatCuoc
  }
}

const mapDispatchToProps =dispatch=>{
  return {
    datCuoc:(maCuoc)=>{
      dispatch({
        type:'CHON_KEO_BUA_BAO',
        maCuoc
      })
    }
  }
}

export default connect(mangStateToProps,mapDispatchToProps)(Player)