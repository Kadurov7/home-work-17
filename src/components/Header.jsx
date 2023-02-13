import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <NavListStlye>
        <ul>
          <li>
            <NavLink
              to="materials"
              style={({ isActive }) => ({
                color: isActive ? "white" : "black",
                textDecoration: isActive ? "underline 7px orange" : "none"
              
              })}
            >
              Materials
            </NavLink>
          </li>
          <li>
            <NavLink
              to="students"
              style={({ isActive }) => ({
                color: isActive ? "white" : "black",
                textDecoration: isActive ? "underline 7px orange" : "none"
               
              })}
            >
              Students
            </NavLink>
          </li>
          <li>
            <NavLink
              to="rating"
              style={({ isActive }) => ({
                color: isActive ? "white" : "black",
                textDecoration: isActive ? "underline 7px orange" : "none"
               
              })}
            >
              Rating
            </NavLink>
          </li>
        </ul>
      </NavListStlye>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  background-color: blue;
  height: 20vh;
  display: flex;
  justify-content: center;
  
`;
const NavListStlye = styled.nav`
  display: flex;
  list-style: none;
  color: white;
  font-size: 20px;
  justify-content: space-around;


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