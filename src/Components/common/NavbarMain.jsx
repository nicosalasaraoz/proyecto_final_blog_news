import React from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";

const NavbarMain = ({searchState, setSearchState }) => {

  return (
    <>
      <Navbar bg="dark" expand="md" className="bg-navbar">
        <Container className="icon-tog">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-light"
          />
          <Navbar.Collapse id="basic-navbar-nav" className="navBarMobile">
            <div className="d-flex justify-content-center">
              <div className="icono-call text-dark mb-1 mx-2">
                <Link to="/" className="navIcons">
                  <ion-icon name="home"></ion-icon>
                  <span className="textNav">Inicio</span>
                </Link>
              </div>
              <div className="icono-call  text-dark mb-1 mx-2">
                <Link to="/PaginaContacto" className="navIcons">
                  <ion-icon name="call"></ion-icon>
                  <span className="textNav">Contacto</span>
                </Link>
              </div>
            </div>
            <Form className="ocultar-buscador">
              <Form.Control
                type="search"
                placeholder="Buscar..."
                className="me-2 "
                aria-label="Search"
                size="sm"
                value={searchState}
                onChange={(e) => setSearchState(e.target.value)}
              />
              {searchState ? (
                <Link to="/search" className="SearchIconMobile">
                  <FaSistrix className="d-flex" />
                </Link>
              ) : (
                <Link className="SearchIconMobile">
                  <FaSistrix className="d-flex" />
                </Link>
              )}
            </Form>
            <Nav className="icono-call">
              <div className="navIconsContainer">        
                <NavLink to="/usuario/login" className={"navIcons"}><ion-icon name="log-in-outline" size={3}></ion-icon><span className="textNav">Login</span></NavLink>
                <NavLink to="/usuario/registro" className={"nav-item nav-link text-white"}><ion-icon name="calendar"></ion-icon>
                  <span className="textNav">Registrarse</span></NavLink>
                
              </div>
              <div className="sec-nav">
                <hr className="text-white" />
                <h3 className="text-white fs-5">SECCIONES</h3>
                <div>
                  <Nav.Link className="text-white" eventKey="">
                    Economía
                  </Nav.Link>
                  <Nav.Link className="text-white" eventKey="link-3">
                    Deportes
                  </Nav.Link>
                  <Nav.Link className="text-white" eventKey="link-4">
                    Mundo
                  </Nav.Link>
                  <Nav.Link className="text-white" eventKey="link-5">
                    Espectáculos
                  </Nav.Link>
                  <Nav.Link className="text-white" eventKey="link-6">
                    Política
                  </Nav.Link>
                  <Nav.Link className="text-white" eventKey="link-7">
                    Opinión
                  </Nav.Link>
                  <Nav.Link
                    href="https://www.lavoz.com.ar/temas/exclusivo/"
                    className="text-white"
                    eventKey="link-8"
                  >
                    Contenido Exclusivo
                  </Nav.Link>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMain;
