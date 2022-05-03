import React, { Component } from "react";
import Profile from "./Profile";

export default class DemoPureComponent extends Component {

    state={
        like:0
    }

    likeImage =()=>{
      let likeHienTai=this.state.like+1;
      this.setState({
          like:likeHienTai
      })
    }
  render() {
    return (
      <div className="container">
          <h3 className="text-center">Profile Lê Thị A</h3>
          <Profile/>
          <br/>
        <div className="card text-white bg-default">
            <h3 style={{color:'red'}}>Số lượt thả tim({this.state.like})</h3>
          <img className="card-img-top" src="holder.js/100px180/" alt />
          <div className="card-body">
              <button className="btn" style={{color:'red',border:'3px solid red'}} onClick={()=>{this.likeImage()}}>Thả tim<i class="fa fa-heart"></i></button>
            <h4 className="card-title">Title</h4>
            <p className="card-text">Body</p>
          </div>
        </div>
      </div>
    );
  }
}
