import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import dentistImg from "../../../images/dentist/dentist.jpg"
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
        navigate('/login')
    }
    return (

        <Navbar style={{ height: "90px", backgroundColor: "#0B0B45" }} collapseOnSelect expand="lg" sticky='top' variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home" className="me-5"> <img className='rounded-circle me-2' style={{ width: "60px", height: "60px" }} src={dentistImg} alt="" /> Dentist Hameem</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ">
                        <Nav.Link href="/home#hameem">Hameem</Nav.Link>
                        <Nav.Link href="/home#awesome-services">Services</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={CustomLink} to="/home">Home</Nav.Link>

                        {
                            user ? <button onClick={handleSignOut} className='signout-button'> Sign Out</button>
                                : <Nav.Link as={CustomLink} to="/login">Login</Nav.Link>
                        }
                        {
                            user ? '' : <Nav.Link as={CustomLink} to="/signup">Sign Up</Nav.Link>
                        }

                        <div className='line-1'></div>
                        <div className='line-2'></div>
                        <Nav.Link as={CustomLink} to="/blog">
                            Blogs
                        </Nav.Link>
                        <Nav.Link as={CustomLink} to="/about">
                            About
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;