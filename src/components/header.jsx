import React from 'react'
import logo from '../images/cropped-logo.png';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, } from 'react-bootstrap'
import { VISIBILITY_ABOUTUS, VISIBILITY_SHOPPINGCART } from '../components/Constants.jsx'

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
              <LinkContainer to="/">
                <a>
                  <img src={logo} style={logoStyle} />
                </a>
              </LinkContainer>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <LinkContainer to="/about-us">
              <NavItem>
                About Us
            </NavItem>
            </LinkContainer>
            <LinkContainer to="/admin">
              <NavItem>
                Admin Mode
            </NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <LinkContainer to="/shopping-cart">
              <NavItem>
                Shopping Cart
            </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>
      </div>
    )
  }
}