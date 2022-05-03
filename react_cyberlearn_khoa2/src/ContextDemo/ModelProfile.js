import React, { Component } from "react";

export default class ModelProfile extends Component {
  render() {
    return (
      <div className="mt-5">
        <h3>Profile</h3>
        <div className="card text-white bg-dask" style={{width:300}}>
          <img className="card-img-top" src="https://i.pinimg.com/564x/8f/b9/17/8fb9175f4b20872315a7541fa987b5cd.jpg" alt="123" />
          <div className="card-body">
            <h4 className="card-title">Tên :Thị Ngọc</h4>
            <p className="card-text">Tuổi :18</p>
            <span style={{color:'pink'}}>10<i className="fa fa-heart"></i></span>
          </div>
        </div>
      </div>
    );
  }
}
