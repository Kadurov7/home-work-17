import React from 'react'
import { NavLink } from 'react-router-dom'


const AnouncementLayout = () => {
  return (
    <div>
        <NavLink to="/anouncements" 
      style={({isActive})=>({
        color: isActive ? "black":"black",
        textDecoration: isActive ? "none":"none",
        backgroundColor: isActive ? "#e09dd2":"white"
      })}>
        Anouncements
      </NavLink>
    </div>
  )
}

export default AnouncementLayout