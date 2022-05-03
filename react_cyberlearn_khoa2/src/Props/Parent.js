import React, { Component } from "react";
import Child from "./Child";

import ChildFunctional from "./ChildFunctional";

export default class Parent extends Component {
  product = {
    id: 1,
    name: "bitis hunter x2",
    src: "https://cf.shopee.vn/file/c103c24d746a4612d33cfb4de69a21ee",
    desc: "Giay Viet Nam Chat luong cao",
    price: 1000,
    sizes: [36, 37, 38, 39],
  };

  size = [37, 38, 39, 40, 41];

  showInfo = (name) => {
    alert(name);
  };
  changeTitle = () => {
    this.setState({
      title: "Hoàng",
    });
  };

  render() {
    return (
      <div>
        {/* <input type="text" /> */}
        {/* <Child propSource={this.src} name={this.name} />
        <Child propSource={'https://cf.shopee.vn/file/c103c24d746a4612d33cfb4de69a21ee'} name={'bitis hunter x5'} />
        <Child propSource={this.src} name={'bitis hunter x7'} />
        <Child propSource={this.src} name={this.name} />
        <Child propSource={this.src} name={this.name} /> */}
        {/* <ChildFunctional productItem={this.product}/>
        <Child showAlert={this.showInfo} productItem={this.product} shoesSize={this.size}/> */}
        <h1>{this.state.titlle}</h1>
        <button onClick={this.changeTitle}>Bấm vào đây</button>
        <h3>Danh sách sản phẩm</h3>
        {this.props.children.map((com, index) => {
          return com;
        })}
      </div>
    );
  }
}
