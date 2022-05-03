import React, { Component } from 'react'

export default class ThongTinDatGhe extends Component {
  render() {
    return (
    <div>
      <div className="mt-5" >
          <button className="gheDuocChon"></button><span className="text-light" style={{fontSize:''}}>ghế đã đặt</span>
          <br/>
          <button className="gheDangChon"></button><span className="text-light" style={{fontSize:''}}>ghế đang đặt</span>
          <br/>
          <button className="ghe" style={{marginLeft:0}}></button><span className="text-light" style={{fontSize:'',marginLeft:0}}>ghế chưa đặt</span>
    </div>
    <div>
        <table class="table" border="3">
            <thead>
                <tr className="text-light" style={{fontSize:'35px'}}>
                    <th>Số ghế</th>
                    <th>Giá</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Số ghế</th>
                    <th>Giá</th>
                    <th></th>
                </tr>
                <tr>
                    <th>Số ghế</th>
                    <th>Giá</th>
                    <th></th>
                </tr>
 
            </tbody>
        </table>
    </div>
    </div>
    
    )

  }
}
