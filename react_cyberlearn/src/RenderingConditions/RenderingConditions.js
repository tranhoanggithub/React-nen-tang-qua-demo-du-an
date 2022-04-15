import React, { Component } from 'react'

export default class RenderingConditions extends Component {

login=false;
userName="Trần Hoàng";

renderContent= ()=>{
    if(this.login){
        return <p>Hello {this.userName}</p>
    }
    return <button>Đăng nhập</button>
}

  render() {
    return (
      <div>
          {/* {this.login===true? <p>Hello {this.userName}</p>:<button>Đăng nhập</button>} */}
          {this.renderContent()}
      </div>
    )
  }
}
