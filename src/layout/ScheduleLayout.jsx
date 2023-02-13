import React from 'react'
import { NavLink } from 'react-router-dom'


const ScheduleLayout = () => {
  return (
    <div>
        <NavLink to="/schedule" 
      style={({isActive})=>({
        color: isActive ? "black":"black",
        textDecoration: isActive ? "none":"none",
        backgroundColor: isActive ? "#e09dd2":"white"
      })}>
        Schedule
      </NavLink>
    </div>
  )
}

export default ScheduleLayout;

