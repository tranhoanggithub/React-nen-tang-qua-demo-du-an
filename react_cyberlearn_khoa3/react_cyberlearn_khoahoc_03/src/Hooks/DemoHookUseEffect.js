import React, { useState, useEffect, Children } from "react";
import ChildUseEffect from "./ChildUseEffect";

export default function DemoHookUseEffect() {
  let [number, setNumber] = useState(1);
  let [like , setLike] = useState(1);
  console.log(like)

  // let [] = useState();
  //useEffetct là hàm chạy sau khi render thay cho didupdate và didmount trong mọi trường h
    useEffect(()=>{
      console.log('didmount');

    }, [])

    // Cách viết thay thế componentdidupdate
    useEffect(()=>{
      console.log('didupdate khi number thay doi')

    }, [number])//
  const handleIncrease = () => {
    let newNumber = number + 1;
    setNumber(newNumber);
  };
  return (
    <div>
      <div className="card text-left">
        <img style={{width:200,height:200}} className="card-img-top" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fbcp.cdnchinhphu.vn%2F334894974524682240%2F2022%2F4%2F29%2Fson-tung-mtp-08110778-1651217357607701319631.jpg&imgrefurl=https%3A%2F%2Fbaochinhphu.vn%2Fcuc-nghe-thuat-bieu-dien-de-nghi-xu-ly-viec-luu-hanh-ban-ghi-am-ghi-hinh-cua-son-tung-m-tp-official-102220429143256265.htm&tbnid=TL1HIz2Q0pnllM&vet=12ahUKEwjpsfOC2Iz4AhUGBaYKHQGTAfAQMygCegUIARCmAQ..i&docid=DmrqEiDrk6FWMM&w=1200&h=675&q=son%20tung&ved=2ahUKEwjpsfOC2Iz4AhUGBaYKHQGTAfAQMygCegUIARCmAQ" alt />
        <div className="card-body">
          <h4 className="card-title text-danger">{number}tim</h4>
        </div>
      </div>

      <button className="btn btn-success" onClick={handleIncrease}>
        +
      </button>

      {like==1?<ChildUseEffect/>:''}
    </div>
  );
}
