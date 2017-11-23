import React from 'react'
import logo from '../images/cropped-logo.png';
import { VISIBILITY_ABOUTUS, VISIBILITY_SHOPPINGCART } from '../components/Constants.jsx'
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap'

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
              <a href='/home'>
                <img src={logo} style={logoStyle} />
              </a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem href="/about-us">About Us</NavItem>
            <NavItem href="/admin">Admin Mode</NavItem>
          </Nav>
          <Nav pullRight>
            <MenuItem href="/shopping-cart"> Shopping Cart</MenuItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}