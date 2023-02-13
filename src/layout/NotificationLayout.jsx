import React from 'react'
import { NavLink } from 'react-router-dom'


const NotificationLayout = () => {
  return (
    <div><NavLink to="/notifications" 
    style={({isActive})=>({
      color: isActive ? "black":"black",
      textDecoration: isActive ? "none":"none",
      backgroundColor: isActive ? "#e09dd2":"white"
    })}>
      Notifications
    </NavLink></div>
  )
}

export default NotificationLayout