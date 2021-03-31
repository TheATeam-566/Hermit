import React from 'react';
import { NavItem, NavLink, Nav, Row, Col } from 'react-bootstrap';

export default function DemoFooter() {
  return (
    <>
      <footer className="footer" style={{ overflowX: 'hidden' }}>
        <Row>
          <Col md={{ span: 2, offset: 1 }}>
            <h1 className="title">Hermit</h1>
          </Col>
          <Col md={{ span: 1.5, offset: 2 }}>
            <Nav>
              <NavItem>
                <NavLink href="/contactus">Contact Us</NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md={{ span: 1.5, offset: 0 }}>
            <Nav>
              <NavItem>
                <NavLink href="/aboutus">About Us</NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md={{ span: 1.5, offset: 0 }}>
            <Nav>
              <NavItem>
                <NavLink href="/tos">Terms and Conditions</NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md={{ span: 2, offset: 3 }}>
            <Row>© 2021, Designed by The A Team. </Row>
            <Row>‏‏‎ ‎‏‏‎‎ ‎ ‎‏‏‎‎ ‎‏‏‎‎ ‎‏‏‎ ‎‏‏‎ ‎Coded by The A Team. </Row>
          </Col>
        </Row>
      </footer>
    </>
  );
}
