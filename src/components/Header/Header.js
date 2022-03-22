import { Button } from 'react-bootstrap';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import useAuth from './../../hooks/useAuth';
import { FaSignOutAlt } from "react-icons/fa";

const Header = () => {
    const { user, logOut } = useAuth();
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

                        {
                            user.displayName ? <Nav.Link as={Link} to="/admin">
                                {user.displayName}
                            </Nav.Link> : ''
                        }
                        {
                            user.email ?
                                <Link alt='Logout' onClick={logOut} className='login-btn' to='/login'><FaSignOutAlt /></Link> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>

                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;