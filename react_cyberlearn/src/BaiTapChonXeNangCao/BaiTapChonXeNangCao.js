import React, { Component } from "react";
import "./BaiTapChonXeNangCao.css";
//Import mảng dữ liệu các model xe
import dataFeatures from "../Data/arrayFeatures.json";
import dataWheels from "../Data/wheels.json";

export default class BaiTapChonXeNangCao extends Component {

state={
  carCurrent: {
    "id": 4,
    "title": "Rallye Red",
    "type": "Metallic",
    "img": "./images/images/icons/icon-red.jpg",
    "srcImg": "images-red/images-red-1/",
    "color": "Red",
    "price": "22,550",
    "engineType": "In-Line 4-Cylinder",
    "displacement": "1996 cc",
    "horsepower": "158 @ 6500 rpm",
    "torque": "138 lb-ft @ 4200 rpm",
    "redline": "6700 rpm",
    "wheels": [
      {
        "idWheel": 1,
        "srcImg": "images-red/images-red-1/"
      },
      {
        "idWheel": 2,
        "srcImg": "images-red/images-red-2/"
      },
      {
        "idWheel": 3,
        "srcImg": "images-red/images-red-3/"
      }
    ]
  }
}


  renderIcon = () => {
    return dataFeatures.map((item, index) => {
      return (
        <div className="row mt-1 border border-color-default m-3" key={index}>
          <div className="col-2">
            <img
              className="p-3"
              style={{ width: "100%" }}
              src={item.img}
              alt={index}
            />
          </div>
          <div className="col-10">
            <h5>{item.title}</h5>
            <span className="p-3 pt-0 mt-0">{item.type}</span>
          </div>
        </div>
      );
    });
  };

  renderWheels = () => {
    return dataWheels.map((item, index) => {
      return (
        <div className="row mt-1 border border-color-default m-3" key={index}>
          <div className="col-2">
            <img
              className="p-3"
              style={{ width: "100%" }}
              src={item.img}
              alt={index}
            />
          </div>
          <div className="col-10 d-flex flex-colums align-items-center">
            <h5>{item.title}</h5>
            <span className="p-3 pt-0 mt-0 mt-5">{item.type}</span>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <div className="model">
              <img
                style={{ width: "100%" }}
                src="./images/images/images-black/images-black-1/civic-1.jpg"
              />
            </div>
            <div className="card mt-2">
              <h3 className="card-header text-default">Exterior color</h3>
              <table className="table border border-color-light" border="1">
                <tbody>
                  <tr>
                    <th>Color</th>
                    <th>Black</th>
                  </tr>
                  <tr>
                    <th>Price</th>
                    <th>$19.000,00</th>
                  </tr>
                  <tr>
                    <th>Engine Type</th>
                    <th>In-line-4-cilynder</th>
                  </tr>
                </tbody>
              </table>
              <div className="card-body">
                <h4 className="card-title">Title</h4>
                <p className="card-text">Text</p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card text-left">
              <div className="card-header text-default">Exterior color</div>
              <div className="container-fluid">{this.renderIcon()}</div>
              <div className="card text-left">
                <h5 className="card-header text-default">Wheels</h5>
              </div>

              <div className="container-fuild">{this.renderWheels()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
