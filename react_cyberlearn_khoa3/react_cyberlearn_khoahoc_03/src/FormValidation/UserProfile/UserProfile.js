import React, { Component } from "react";
import "./UserProfile.css";

export default class UserProfile extends Component {

  state={
    values:{
      firstName:'',
      lastName:'',
      userName:'',
      email:'',
      passWord:'',
      passWordComfirm:'',
      errFirstName:''
    },
    errors:{
      firstName:'firstName is required',
      lastName:'',
      userName:'',
      email:'',
      passWord:'',
      passWordComfirm:'',
      errFirstName:''
    },


  }

  handleChangeValue= (event)=>{
    // console.log(name,value)
    // this.setState({
    //   [name]:value
    // },()=>{
    //   console.log(this.state)
    // })
    let {name, value }= event.target
    console.log(name,value)
    let newValue={...this.state.values
      
      ,[name]:value};
    let newErrors={...this.state.errors};

    this.setState({
      values:newValue,
      errors:newErrors
    })
    // this.setState({
    //   [name]:value
    // },()=>{
    //   console.log(this.state)
    // }
    // )
    // console.log(name,value);
    // this.setState({
    //   values:{...this.state.values,[name]:value}
    // })

    // this.setState({
    //   errors:{...this.state.errors,[name]:'lỗi'}
    // })

    // if(value===''){
    //   this.setState({
    //     errors:{...this.state.errors,[name]:'Không được bỏ trống'}
    //   })
    // }
    if(value.trim()===''){
      newErrors[name] = name +'is requỉed'
    }
  }

  render() {
    return (
      <div
        className="container-fluid "
        style={{
          backgroundColor: "#EEEEEE",
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form className="w-50 bg-white  p-5 m-5">
          <h1 className="text-center">User Profile</h1>
          <div className="row">
            <div className="col-6">
            <label>Firt name</label>
              <input
              value={this.state.values.firstName}
                className="effect-9"
                type="text"
                placeholder="Placeholder Text"
                name="firstName"
                required
                onChange={this.handleChangeValue}
              />
              <span className="text text-danger">{this.state.errors.firstName}</span>

            </div>
            <div className="col-6">
            <label>Last name</label>
              <input
                value={this.state.values.lastName}
                className="effect-9"
                type="text"
                placeholder="Placeholder Text"
                name="lastName"
                required 
                onChange={this.handleChangeValue}
              />
              <span className="text text-danger">{this.state.errors.lastName}</span>

            </div>
          </div>
          <div className="row">
            <div className="col-12">
                <label>User Name</label>
              <input
                value={this.state.values.userName}
                className="effect-9"
                type="text"
                placeholder="Placeholder Text"
                name="userName"
                onChange={this.handleChangeValue}
                
              />
              <span className="text text-danger">{this.state.errors.userName}</span>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
                <label>Email</label>
              <input
                value={this.state.values.email}
                className="effect-9"
                type="text"
                placeholder="Placeholder Text"
                name="email"
                onChange={this.handleChangeValue}
              />
            <span className="text text-danger">{this.state.errors.email}</span>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
            <label>Password</label>
              <input
                value={this.state.values.passWord}
                className="effect-9"
                type="password"
                placeholder="Placeholder Text"
                name="passWord"
                onChange={this.handleChangeValue}
              />
              <span className="text text-danger">{this.state.errors.passWord}</span>

            </div>
            <div className="col-6">
            <label>PasswordConfirm</label>
              <input
              value={this.state.values.passWordComfirm}
                className="effect-9"
                type="text"
                placeholder="Placeholder Text"
                name=" passWordComfirm"
                required 
                onChange={this.handleChangeValue}
              />
                <span className="text text-danger">{this.state.errors.passWordComfirm}</span>

            </div>
          </div>
          <div className="row">
            <div className="col-12">
                <button className="btn text-white bg-dark w-100" style={{fontSize:17}}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
