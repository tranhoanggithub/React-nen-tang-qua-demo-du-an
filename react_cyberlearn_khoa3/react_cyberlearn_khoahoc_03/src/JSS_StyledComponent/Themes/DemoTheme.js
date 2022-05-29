import React from 'react'
import styled, {ThemeProvider} from 'styled-components'
import { Component } from 'react'

const configDarkTheme={
    darkColor:'#000',
    blueColor:'#FFF',
    fontSize:'15px',
    fontWeight:'bold'

}

const configLightTheme={
    background:'#6633FF',
    color:'#FFF',
    fontSize:'20px',
    fontWeight:'300'
}
export default class DemoTheme extends Component {

    state={
        currentTheme:configDarkTheme
    }

    handleChangeTheme = (event) =>{
        this.setState({
            currentTheme :event.target.value=='1' ? configDarkTheme : configLightTheme
        })
    }

  render() {


    const DivStyle =styled.div`
    color:${props=>props.theme.darkColor};
    padding:5%;
    backgroundColor: ${props=> props.theme.blueColor};
    font-size:$(props=>props.theme.fontSize);
    font-weight:${props=>props.theme.fontWeight}
    `
    return (
        <ThemeProvider theme={this.state.currentTheme}>
        <DivStyle>DemoTheme</DivStyle>
        <select onChange={this.handleChangeTheme} class="">
            <option value="1">Dark Theme</option>
            <option value="2">Light Theme</option>
        </select>
    </ThemeProvider>
    )
  }
}



