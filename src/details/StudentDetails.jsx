import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const MaterialDetails = ({students}) => {

   const [studentPage, setStudentPage] = useState({});
   const {id} = useParams();
   useEffect(()=>{
     const newStudents = students.find((item)=> item.id === +id);
     setStudentPage(newStudents)
   },[students, id])

  return (
    <>
       <Container>
        <NavList>
            <li>
              <h2>Student Details Page:</h2>
                <h2>{studentPage.title}</h2>
                
                   
            </li>
        </NavList>
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


const NavList = styled.ul`
  list-style: none;
  display: flex;
  padding-top: 1rem;
`