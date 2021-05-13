import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Menu extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/home"><img src="logo.png" alt="drone logo" /></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/signUp">Sign Up</Nav.Link>
                    <Nav.Link href="/signIn">Sign In</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}
export default Menu;