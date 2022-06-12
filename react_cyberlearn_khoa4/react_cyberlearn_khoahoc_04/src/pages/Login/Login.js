import React, { useState, Prompt } from 'react'

export default function Login(props) {

  const [userLogin, setUserLogin] = useState({userName:'',passWord:''})

  console.log(userLogin)



  const handleChange= (event) =>{
    const {name , value} = event.target;
    setUserLogin({
      ...userLogin,
      [name]:value
    })
  }


  const handleLogin = (event) =>{
    event.preventDefault();
    if(userLogin.userName === 'cyberlearn' && userLogin.passWord ===' cyberleaarn'){

      // Thành công thì chuyển về trang trước đó
      props.history.goBack();
      localStorage.setItem('userLogin',JSON.stringify(userLogin))
    }else{
      alert(' Login fail')
      return;
    }
  }
   return (
    <form className="container" onSubmit={handleLogin}>
      <h3 className="display-4">Login</h3>
      <div className="form-group">
        <p>UserName</p>
        <input name= "userName" className="form-control" onChange={handleChange} />
      </div>
      <div className="form-group">
        <p>Password</p>
        <input name ="passWord" className="form-control" onChange={handleChange} />
      </div>
      <div className="form-group">
        <p>Tài khoản</p>
          <button className="btn btn-success">Đăng nhập</button>
      </div>
      <Prompt when = {false} message = {(localtion)=>{
        console.log(localtion)
        return "Bạn có chắc muốn rời trang này không"
      }}
      />

    </form>
  )
}
