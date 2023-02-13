import React from 'react'
import CoursesLayout from '../layout/CoursesLayout'
import AnouncementLayout from '../layout/AnouncementLayout'
import NotificationLayout from '../layout/NotificationLayout'
import ScheduleLayout from '../layout/ScheduleLayout'
import styled from 'styled-components'

const NavBar = () => {
  return (
    <>
     <Container>
        <Logo>LOGO</Logo>
        
            <NavList>
                <li>
                <CoursesLayout/>
                </li>
                <li>
                <AnouncementLayout/>
                </li>
                <li>
                <NotificationLayout/>
                </li>
                <li>
                <ScheduleLayout/>
                </li>
            </NavList>
        
     </Container>
    </>
  )
}

export default NavBar;

const Container = styled.div`
  position: fixed;
  background-color: antiquewhite;
  width: 27vw;
  height: 97vh;
`
const Logo = styled.h1`
  color: blueviolet;
  padding: 2rem 0 4rem 0;
`
const NavList = styled.ul`
  background-color: white;
  width:20vw;
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-left:3rem;
  border-radius: 9px;
  padding:30px 0;
  gap: 2rem;
  
  li{
    font-size:22px;
  }
`