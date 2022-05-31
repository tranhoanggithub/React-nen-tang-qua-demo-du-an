import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class LifeCycleReact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
  }
// Được gọi khi component này được sử dụng trên DOM
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return null;
  }
// Được gọi khi setstate hoặc props
  shouldComponentUpdate(newProps, newState) {
    //return true thì chạy tiếp các lifecycle còn lại, nược lại return false thì sẽ dừng lại không chạy tiếp lycle
    return true;
  }
  render() {
    console.log('renderParent');
    return (
      <div>
        <h1>Parent Component</h1>
        <span>Number:{this.state.number}</span>
        <button className="btn btn-success" onClick={()=>{
          this.setState({
            number:this.state.number+1
          })
        }}>
          +
        </button>
        <ChildComponent />
      </div>
    );
  }
//Được gọi 1 lần duy nhất và chỉ gọi 1 lần duy nhất trạng thái mouting
  componentDidMount() {
    console.log("componentDidMount");
  }
//Lần đầu không gọi, chỉ gọi khi setState hoặc thay đổi props
  componentDidUpdate(prevProps, prevState){
    console.log('componentDidUpdate')
  }
}
