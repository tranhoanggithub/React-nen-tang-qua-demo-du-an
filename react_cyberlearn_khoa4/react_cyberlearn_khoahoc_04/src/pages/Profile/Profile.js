import React from 'react'

export default function Profile(props) {

    if(localStorage.getItem('userLogin')){


  return (
    <div>Profile</div>
  )
}else{
    alert('Vui lòng đăng nhập để vào trang này')
}
}
