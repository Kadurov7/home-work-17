import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import styled from 'styled-components'

const Students = ({students}) => {
  return (
    <div>
        {students.map((item, index)=>{
          return(
            <div>
            <StyleTitle>
              <li>
                <h2>{item.title}</h2>
              </li>
            <Link to={`${item.id}/details`} key={index}>
              <StyledButton>
              <Button text="Details"/>
              </StyledButton>
            </Link>
            </StyleTitle>
            </div>
          )
        })}
    </div>
  )
}

export default Students;

const StyleTitle = styled.div`
    background-color: white;
    width: 890px;
    height:14vh;
    margin-left:25rem;
    border-radius: 11px;
    list-style: none;
   h2{
    display: flex;
    padding: 20px 0 0 30px;
   }
` 
const StyledButton = styled.div`
    margin-left:44rem;
    margin-top: -3rem;
`