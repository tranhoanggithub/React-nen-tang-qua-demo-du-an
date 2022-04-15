import React, { Component } from 'react'

export default class StateDemo extends Component {

    //state là thuộc tính có sẵn của react class component giúp định nghĩa những nội dung có khả năng thay đổi khi người dùng thao tác sự kiện
    state={
        status:false
    }
    //setState là phương thúc có sẵn của react class component giúp thay đổi giá trị state và render lại giao diện

    status=false;
    userLogin ={
        name:'Trần Hoàng',
        age:20
    }
    
    login =()=>{
        let newState ={
            status:true
        }
        //Gọi phương thúc setState
        this.setState(newState);
        console.log(this.state)
    }

    renderUserLogin =()=>{
        if(this.status=true)
        {
            return<div className="text-center">{this.userLogin.name}</div>
        }
        return <button onClick={()=>{this.login()}}>Đăng nhập</button>
    }
  render() {
    return (
      <div>
          {this.renderUserLogin()}
      </div>
    )
  }
}
