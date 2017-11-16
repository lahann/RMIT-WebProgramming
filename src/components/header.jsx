import React from 'react'
import logo from '../images/cropped-logo.png';
import { Button, Navbar, NavDropdown, Nav, NavItem, MenuItem, Grid } from 'react-bootstrap'

// Logo should be aligned to the left side
// ShoppingCart Btn should be aligned to the right side

export default class Header extends React.Component {

  render() {
    const style = {
      height: 40 + 'px',
      position: 'relative',
      marginTop: -10 + 'px'
    }
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='#'>
                <img src={logo} style={style} />
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