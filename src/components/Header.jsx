import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap"

export default function Header() {
    const [query, setQuery]  = useState("")
    const navigate = useNavigate()
    
    //handles search 
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!query.trim()) return;
        navigate(`/search?q=${query.trim()}`)
    }

    return (
        <>
            <Navbar bg="white" expand="lg" fixed="top" className="border-bottom shadow-sm">
                <Container fluid>
                    <Navbar.Brand as={NavLink} to="/" className="fw-bold">
                        The Shop
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="main-navbar"/>
                    <Navbar.Collapse id="main-navbar">
                        {/*searchbar*/}
                        <Form className="d-flex flex-grow-1 mx-lg-3 my-2 my-lg-0" onSubmit={handleSubmit} role="search">
                            <Form.Control
                                type="search"
                                placeholder="Search The Shop"
                                className="me-2"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <Button type="submit" variant="outline-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                </svg>
                            </Button>
                        </Form>

                        <Nav className="ms-lg-3 align-items-center">
                            {/*maybe change this later to a button/style it a bit*/}
                            <Button as={NavLink} to="/signin" variant="outline-dark" size="sm" className="me-2">
                                Sign In
                            </Button>
                            <Button as={NavLink} to="/cart" variant="outline-dark" size="sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                                </svg>
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}