import styled from 'styled-components';
import React from 'react'


export const Link = ({className,children,...restProps})=>(
    <a className={className}>

    </a>
)

export const StyledLink= styled(Link)`
    color:palevioletred;
    font-weight:bold;
    background:red;
`

