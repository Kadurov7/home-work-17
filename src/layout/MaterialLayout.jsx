import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MaterialsLayout = () => {
  return (
    <div>
      <NavListStlye>
        <ul>
          <li>
            <NavLink
              to="submited"
              style={({ isActive }) => ({
                color: isActive ? "white" : "black",
                textDecoration: isActive ? "underline 7px orange" : "none"
              
              })}
            >
              Submited
            </NavLink>
          </li>
          <li>
            <NavLink
              to="waiting"
              style={({ isActive }) => ({
                color: isActive ? "white" : "black",
                textDecoration: isActive ? "underline 7px orange" : "none"
              
              })}
            >
              Waiting
            </NavLink>
          </li>
          <li>
            <NavLink
              to="late"
              style={({ isActive }) => ({
                color: isActive ? "white" : "black",
                textDecoration: isActive ? "underline 7px orange" : "none"
              
              })} 
            >
              Late
            </NavLink>
          </li>
        </ul>
      </NavListStlye>
    </div>
  );
};

export default MaterialsLayout;

const NavListStlye = styled.nav`
  display: flex;
  list-style: none;
  color: white;
  font-size: 20px;
  margin-left:3rem ;

  ul {
    display: flex;
    list-style: none;
    align-items: center;
    width: 400px;
    justify-content: space-between;
  }
  li {
    cursor: pointer;
    font-size: 25px;
  }
`;
