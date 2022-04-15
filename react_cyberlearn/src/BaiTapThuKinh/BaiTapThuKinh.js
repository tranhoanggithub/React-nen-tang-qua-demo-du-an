import React, { Component } from "react";
import dataGlasses from "../Data/dataGlasses.json";
import './BaiTapThuKinh.css';

export default class BaiTapThuKinh extends Component {
  state = {
    glassesCurrent: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  renderGlassesList = () => {
    return dataGlasses.map((glassesItem, index) => {
      return (
        <img
          onClick={()=>{this.changeGlasses(glassesItem)}}
          className="ml-2 p-1 border border-width-1"
          style={{ width: "120px", cursor: "pointer" }}
          key={index}
          src={glassesItem.url}
        />
      );
    });
  };
  changeGlasses=(newGlasses)=>{
    this.setState({
      glassesCurrent:newGlasses
    })
  }

  render() {
    const keyFrame =  `@keyframes animChangeGlasses${Date.now()}{
      from{
        width:0;
        transform :rote(45deg);
        opation:0;
      }
      to{
        width:150px;
        opacity:0.7;
        transform: rotate(0deg);
      }
    }
    
    `

    const styleGlasses = {
      width: "150px",
      top: "75px",
      right: "70px",
      opacity: "0.7",
      transform:'rotate(0deg)',
      animation:`animChangeGlasses${Date.now()} 2s  `
    };
    const infoGlasses = {
      with: "250px",
      top: "200px",
      left: "270px",
      paddingLeft: "15px",
      backgroundColor: "rgba(255, 127, 0, 0.5)",
      textAlign: "left",
      height: "105px",
      width: "249px",
    };

    return (
      <div
        style={{
          backgroundImage: "url(./glassesImage/background.jpg)",
          backgroundSize: "2000px",
          minHeight: "2000px",
        }}
      >
        <style>
          {keyFrame}
        </style>
        <div style={{ backgroundColor: "rgba(0,0,0,.8", minHeight: "2000px" }}>
          <h3
            style={{ backgroundColor: "rgba(148,0,211,.8)" }}
            className="text-center text-light p-5"
          >
            TRY GLASSES APP ONLINE
          </h3>
          <div className="container">
            <div className="row mt-5 text-center">
              <div className="col-6">
                <div className="position-relative">
                  <img
                    className="position-absolute"
                    style={{ width: "250px" }}
                    src="./glassesImage/model.jpg"
                    alt="model.jpg"
                  />
                  <img
                    style={styleGlasses}
                    className="position-absolute"
                    src={this.state.glassesCurrent.url}
                  />
                  <div
                    style={infoGlasses}
                    className="position-relative font-weight-bold"
                  >
                    <p style={{ color: "#AB82FF" }}>
                      {this.state.glassesCurrent.name}
                    </p>
                    <span
                      className="mr-1"
                      style={{ fontSize: "13px", fontWeight: "400" }}
                    >
                      {this.state.glassesCurrent.desc}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img
                  style={{ width: "250px" }}
                  src="./glassesImage/model.jpg"
                  alt="model.jpg"
                />
              </div>
            </div>
          </div>
          /*Div chứa các kính được chọn */
          <div className="bg-light container text-center mt-5 d-flex justfy-content-center">
            {this.renderGlassesList()}
          </div>
        </div>
      </div>
    );
  }
}
