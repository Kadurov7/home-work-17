import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const CoursesLayout = () => {
  return (
    <div>
      <NavLink to="/courses/materials" 
      style={({isActive})=>({
        color: isActive ? "black":"black",
        textDecoration: isActive ? "none":"none",
        backgroundColor: isActive ? "#e09dd2":"white"
      })}>
        Courses
      </NavLink>
    </div>
  )
}

export default CoursesLayout;

