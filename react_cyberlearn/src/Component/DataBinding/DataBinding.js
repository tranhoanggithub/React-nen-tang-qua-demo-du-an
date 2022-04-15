import React, { Component } from 'react';

export default class DataBinding extends Component {

    name='Trương Tuấn Khải';
    student ={
        name:'Song Lê',
        age:20
    }
    //Binding phương thức (hàm của lớp đối tượng)
    renderImage =()=>{
        return <img src="https://demoda.vn/wp-content/uploads/2022/01/anh-naruto-3d.jpg" alt="image naruto"/>
    }

    renderMultiComponent= ()=>{
        const virus ={
            id:'Covid-19',
            name:'corona',
            alias:'daccovi'
        }
    }
  render() {

    const school='cyberlearn';
    const student1 ={
        name:"Hoàng Hoàng",
        age:23
    }

    return (
    <div>
        <h1>React class component data binding</h1>
        <hr/> 
        <h1>hello {this.name}- school:{school}</h1> 
        <h1>Binding Object</h1>
        <h1>name {this.student.name}-age:{this.student.age}</h1>
        <h1>name {student1.name}-age:{student1.age}</h1>
        <h3>Binding function</h3> 
        {this.renderImage()}     
    </div>
    );
  }
}
