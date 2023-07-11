import React from 'react'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaAlignJustify, FaSort } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const Desplegable = ({setCategory}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [col, setCol] = useState(true);

  return (
    <>
      <span className="desp m-1" onClick={handleShow}>
        <FaAlignJustify className='icon-desp' />
      </span>

      <Offcanvas className="canv" show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton >
          <Offcanvas.Title>
            <Link to="/">
              <img
                src="./images/logo.png"
                alt="logo"
                height="70"
                className="pt-1"
              />
            </Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="canv-b">
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link eventKey="link-1">Último Momento</Nav.Link>
            <hr></hr>
            <div className='d-flex justify-content-end' ><button onClick={() => setCol(!col)} className='bt-sort' ><FaSort /></button></div>
            <div className={`d-flex ${col ? "flex-column" : "flex-column-reverse"}`}>
              <Link to={'/category'} onClick={()=>setCategory('Deporte')}>Deportes</Link>              
              <Nav.Link eventKey="">Economía</Nav.Link>
              <Nav.Link eventKey="link-4">Mundo</Nav.Link>
              <Nav.Link eventKey="link-5">Espectáculos</Nav.Link>
              <Link to={'/category'} onClick={()=>setCategory('Politica')}>Politica</Link> 
              <Nav.Link eventKey="link-7">Opinión</Nav.Link>
              <a href="https://www.lavoz.com.ar/temas/exclusivo/" className='fw-bold fs-6 text-dark' style={{ textDecoration: "none" }}>Contenido Exclusivo</a>
            </div>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Desplegable;