/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, //
  Container,
  Nav,
  Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';

export default function NavBar() {
  const { user } = useAuth();

  return (
    <Navbar collapseOnSelect className="nav" expand="lg" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand className="logo">BANGAZON</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <div className="nav-left">
              <Link passHref href="/sellers">
                <Nav.Link>Sellers</Nav.Link>
              </Link>
              <Link passHref href="/products">
                <Nav.Link>Products</Nav.Link>
              </Link>
              <Link passHref href="/user-profile">
                <Nav.Link>{user.username || 'Profile'}</Nav.Link>
              </Link>
            </div>
            <div className="nav-right">
              <Link passHref href="/cart">
                <Nav.Link>Cart</Nav.Link>
              </Link>
              <Button variant="danger" onClick={signOut}>
                Sign Out
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
