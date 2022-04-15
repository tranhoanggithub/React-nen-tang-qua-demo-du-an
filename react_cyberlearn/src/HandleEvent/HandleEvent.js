import React, { Component } from 'react'

export default class HandleEvent extends Component {
    handleClick=(name)=>{
        alert("hello:" +name)
    }

    //Truyền tham số 
    handleClickParam= (param) =>{
        alert("param:"+param)
    }
  render() {
    return (
      <div>
          <button onClick={()=>this.handleClick("khải")}>Click me</button>
      </div>
    )
  }
}
