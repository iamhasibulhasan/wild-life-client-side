import { Button } from 'react-bootstrap';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img width="35%" src="https://i.ibb.co/dKxqq22/wild-logo.png" alt='WildLife Photography' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto gap-3">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/donation">Donation</Nav.Link>
                        <Nav.Link as={Link} to="/events">Events</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        <Link className='login-btn' to='/login'>Login</Link>
                        <Link className='admin-btn' to='/admin'>Admin</Link>



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;