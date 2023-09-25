import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom"

import { UserContext } from '../App'
function NavigationBar() {
  const { state, dispatch } = useContext(UserContext);
  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/logout">Logout</NavLink>
          </li>
        </>
      )
    }
    else {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">Signup</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/logout">Logout</NavLink>
          </li>
        </>
      )
    }
  }
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Rohan</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">  {/* Use ms-auto to align to the right */}
              <RenderMenu></RenderMenu>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavigationBar