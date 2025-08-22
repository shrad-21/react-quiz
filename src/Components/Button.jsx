import React from 'react'
import styled from 'styled-components'

const Button1= styled.button`
padding: 10px;
background-color: ${(props)=>props.color || "#c097c0"};
color: black;
border: none;
margin: 10px;
width: 30%;
border-radius: 4px;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
`
const Button = ({props_text, onClick , color}) => {
  return (
    <>
    <Button1 onClick={onClick} color={color}> {props_text}</Button1>
    </>
  )
}

export default Button