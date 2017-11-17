import React from 'react'
import logo from '../images/cropped-logo.png';
import { Button, Navbar, NavDropdown, Nav, NavItem, MenuItem, Grid } from 'react-bootstrap'

export default class Header extends React.Component {


  render() {
    const logoStyle = {
      height: 40 + 'px',
      position: 'relative',
      marginTop: -10 + 'px'
    }
    const headerStyle = {
      position: 'fixed',
      zIndex: 1,
      width: 100 + '%',
    }
    
    return (
      <div>
        <Navbar style={headerStyle}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='#'>
                <img src={logo} style={logoStyle} />
              </a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="/about-us">About Us</NavItem>
            <NavItem eventKey={2} href="/admin">Admin Mode</NavItem>
          </Nav>
          <Nav pullRight>
            <MenuItem eventKey={3}> Shopping Cart</MenuItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}