import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Contexts } from '../../contexts/Contexts';

function ColorSchemesExample() {
    const { isAuth } = useContext(Contexts)
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/catalog">All Posts</Nav.Link>
                        {isAuth &&
                            <>
                                <Nav.Link as={Link} to="/create">Create Post</Nav.Link>
                                <Nav.Link as={Link} to="/profile">My posts</Nav.Link>
                                <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                            </>
                        }

                        {!isAuth &&
                            <>
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            </>
                        }

                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default ColorSchemesExample;