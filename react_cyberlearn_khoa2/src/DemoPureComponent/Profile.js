import React, { Component ,PureComponent } from "react";

export default class Profile extends PureComponent {
  render() {
    return (
      <div>
        <div className="card text-white bg-dark" style={{width:250}}>
          <img style={{width:250,height:200}} className="card-img-top" src="https://phunugioi.com/wp-content/uploads/2020/01/anh-avatar-supreme-dep-lam-dai-dien-facebook.jpg" alt />
          <div className="card-body">
            <h4 className="card-title">Họ tên : Phan Nhung</h4>
            <p className="card-text">Tuổi 18</p>
          </div>
        </div>
      </div>
    );
  }
}
