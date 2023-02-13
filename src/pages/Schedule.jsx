import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button';
import styled from 'styled-components';


const Schedule = () => {

    const navigate = useNavigate();

    const goToNotification = ()=>{
        navigate("/notifications")
    }
  return (
    <Container>
    <Style>
     <H2>SCHEDULE PAGE</H2>
     <Button onClick={goToNotification} text="Go To Notification Page"/>
 </Style>
 </Container>
  )
}

export default Schedule;

const Container=  styled.div`
  background-color:rgb(204, 209, 233);
  padding: 30px 0 0 0;
  width: 70vw;
  margin-left: 24rem;
 
`
const Style = styled.div`
  background-color: white;
  height: 89vh;
  border-radius: 9px;
`
const H2 = styled.h2`
  padding-top: 4rem;
`