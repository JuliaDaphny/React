import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="mb-5">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>

          <Nav className="me-auto">
            <Link className="nav-link" to="/carros">Home</Link>

            <NavDropdown title="Filmes" id="nav-dropdown">
              <NavDropdown.Item href="/pages/filmes/FilmesPopulares">Populares</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/pages/filmes/FilmesLancamento">Lançamentos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/pages/filmes/FilmesCartaz">Em breve</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Mais Informações" id="nav-dropdown">
              <NavDropdown.Item href="/pagina1">Pagina</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/array">Array</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/objeto">Carros</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/contador">Contador</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
