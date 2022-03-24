<<<<<<< HEAD
import React from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'

const Menu = () => {
    return (
        <div>

            <Navbar bg="black" expand="lg" fixed="top" className="mb-10">
                <Container>
                    <Navbar.Brand href="#home" className='text-white'>React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
                            <Nav.Link href="#login" className='text-white'>Login</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-warning">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

=======
import React from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'

const Menu = () => {
    return (
        <div>

            <Navbar bg="black" expand="lg" fixed="top" className="mb-10">
                <Container>
                    <Navbar.Brand href="#home" className='text-white'>React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
                            <Nav.Link href="#login" className='text-white'>Login</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-warning">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

>>>>>>> 4f5e9848099624b671461e7098961e9e2ee894c3
export default Menu