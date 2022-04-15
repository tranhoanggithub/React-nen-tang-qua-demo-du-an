import React, { Component } from 'react'
import './Styling.css';
import style from './Styling.module.css';

export default class Styling extends Component {
  render() {
      const styleText ={
          color:'pink',
          padding: '15px',
          backgroundColor:'black'
      }
    return (
        <div>
            <p className="txt">hellosadasd</p>
            <p className={style.txtStyle}>Hello khải cyber learn</p>
            <p style= {styleText}> Tao là hachker</p>
          hello
        </div>
    )
  }
}
