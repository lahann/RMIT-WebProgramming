import React from 'react'
import logo from '../images/cropped-logo.png';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, } from 'react-bootstrap'
import { VISIBILITY_ABOUTUS, VISIBILITY_SHOPPINGCART,
  ROUTE_BASE, ROUTE_ABOUTUS, ROUTE_ADMIN, ROUTE_SHOPPINGCART
 } from '../components/Constants.jsx'

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
      top: 0 + 'px'
    }

    return (
      <div>
        <Navbar style={headerStyle}>
          <Navbar.Header>
            <Navbar.Brand>
              <LinkContainer to={ROUTE_BASE} >
                <a>
                  <img src={logo} style={logoStyle} onClick={this.props.reset.bind(this)} />
                </a>
              </LinkContainer>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <LinkContainer to={ROUTE_ABOUTUS}>
              <NavItem>
                About Us
            </NavItem>
            </LinkContainer>
            <LinkContainer to={ROUTE_ADMIN}>
              <NavItem>
                Admin Mode
            </NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <LinkContainer to={ROUTE_SHOPPINGCART}>
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