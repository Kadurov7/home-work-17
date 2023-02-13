import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button';
import styled from 'styled-components';


const Notification = () => {

    const navigate = useNavigate();
    const goToMaterials = ()=>{
        navigate("/courses/materials")
    }
  return (
    <Container>
    <Style>
     <H2>NOTIFICATION PAGE</H2>
     <Button onClick={goToMaterials} text="Go To Materials Page"/>
 </Style>
 </Container>
  )
}

export default Notification;

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