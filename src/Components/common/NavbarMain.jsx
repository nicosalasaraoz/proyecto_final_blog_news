import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";


const NavbarMain = ({usuarioLogueado,setUsuarioLogueado, searchState, setSearchState, setCategory }) => {
  const cerrarSesion = () => {
    localStorage.removeItem("usuarioLogueado");
    setUsuarioLogueado();
  };
  
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
                {!usuarioLogueado ? (
                                <>
                                    
                                </>
                            ) : (
                                <>
                                    {usuarioLogueado.rol === "Administrador" ? (
                                        <>
                                            <NavLink to="/administrar" className={"nav-item linksMenu fw-bold fontTitulos fs-1 hoverLinksMenu"}>
                                                Administrador
                                            </NavLink>
                                            <NavLink
                                                to={"/"}
                                                onClick={cerrarSesion}
                                                className={
                                                    "nav-item linksMenu fw-bold backgroundBotones text-white fs-3 rounded h-5 hoverLoginOutMenu"
                                                }
                                            >
                                                Logout<i className="bi bi-box-arrow-in-right"></i>
                                            </NavLink>
                                        </>
                                    ) : (
                                        <NavLink
                                            to={"/"}
                                            onClick={cerrarSesion}
                                            className={
                                                "nav-item linksMenu fw-bold backgroundBotones margenLogOut text-white fs-3 rounded h-25 hoverLoginOutMenu"
                                            }
                                        >
                                            Logout<i className="bi bi-box-arrow-in-right"></i>
                                        </NavLink>
                                    )}
                                </>
                            )}
              </div>
              <div className="sec-nav">
                <hr className="text-white" />
                <h3 className="text-white fs-5">SECCIONES</h3>
                <Container className="d-flex justify-content-end flex-column">
                  <Link style={{ textDecoration: "none" }} to={'/category'} onClick={()=>setCategory('Deporte')}>Deportes</Link>
                  <Link style={{ textDecoration: "none" }} to={'/category'} onClick={()=>setCategory('Economia')}>Economia</Link>
                  <Link style={{ textDecoration: "none" }} to={'/category'} onClick={()=>setCategory('Mundo')}>Mundo</Link>
                  <Link style={{ textDecoration: "none" }} to={'/category'} onClick={()=>setCategory('Espectaculos')}>Espectaculos</Link> 
                  <Link style={{ textDecoration: "none" }} to={'/category'} onClick={()=>setCategory('Politica')}>Politica</Link>
                  <Link style={{ textDecoration: "none" }} to={'/category'} onClick={()=>setCategory('Opinion')}>Opinion</Link>
                </Container>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMain;
