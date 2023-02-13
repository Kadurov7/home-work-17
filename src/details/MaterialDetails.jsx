import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom';
import styled from 'styled-components';
import MaterialsLayout from '../layout/MaterialLayout';

const MaterialDetails = ({materials}) => {

   const [detailsPage, setDetailsPage] = useState({});
   const {id} = useParams();
   useEffect(()=>{
     const newDetails = materials.find((item)=> item.id === +id);
     setDetailsPage(newDetails)
   },[materials, id])

  return (
    <>
       <Container>
       <NavList>
            <li>
            <h3>MATERIAL DETAILS PAGE: 
                   </h3>
                <h2>{detailsPage.title}</h2>
            </li>
        </NavList>
    
       <Div>
      <MaterialsLayout/>
       </Div>
       <Outlet/>
       </Container>
    
    </>
  )
}

export default MaterialDetails;

const Container = styled.div`
  background-color: white;
  width: 68vw;
  height: 73vh;
  margin-left:25rem;
  border-radius: 9px;
`

const Div = styled.div`
   background-color: #089274;
   margin-top:2rem;
   width: 66.8vw;
   padding:8px;
`
const NavList = styled.ul`
  list-style: none;
  display: flex;
  padding-top: 1rem;
`