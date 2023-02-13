import React from 'react'
import styled from 'styled-components'


const Button = ({text, onClick, color}) => {
  return (
    <StyleBtn onClick={onClick} style={{backgroundColor:`${color}`}}>{text}</StyleBtn>
  )
}

export default Button;

const StyleBtn = styled.button`
  padding: 10px 30px;
  border: none;
  border-radius:13px;
  background-color: #10cfcf;
  font-size: 18px;
`