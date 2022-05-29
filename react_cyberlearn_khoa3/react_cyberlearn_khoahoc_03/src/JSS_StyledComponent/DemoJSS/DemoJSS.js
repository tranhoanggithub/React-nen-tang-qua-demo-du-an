import React, { Component } from 'react'
import {Button,SmallButton} from '../Componnents/Button'
import { StyledLink } from '../Componnents/Link'
import { TextField } from '../Componnents/Textfield'

export default class DemoJSS extends Component {
  render() {
    return (
      <div>
          <Button className='button_style' bgPrimary  >Bấm vào đây</Button>
          <SmallButton>Hello Hoang</SmallButton>
          <StyledLink>Đây là styled</StyledLink>
          <TextField inputColor="green"></TextField>
      </div>
    ) 
  }
}
