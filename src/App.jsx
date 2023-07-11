/* eslint-disable */
import "./css/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/views/Main";
import PaginaContacto from "./Components/views/PaginaContacto";
import NavbarMain from "./Components/common/NavbarMain";
import Error404 from "./Components/common/Error404";
import Footer from "./Components/common/Footer"
import Search from "./Components/views/Search";
import ArticleDetail from "./Components/views/news/ArticleDetail";
import { useState, useEffect } from "react";
import { consultarAPI } from "./Components/helpers/queries";
import Login from "./Components/views/Login";
import Registro from "./Components/views/Registro";
import RutasProtegidas from "./Components/routes/Rutasprotegidas";
import RutasAdmin from "./Components/routes/RutasAdmin";


function App() {
  const usuario = JSON.parse(localStorage.getItem("tokenUsuario")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);
  const [searchState, setSearchState] = useState('');
  const [News, setNews] = useState([]);
  const [nuevo, setNuevo] = useState([]);
  
  useEffect(() => {
    consultarAPI().then((respuesta) => {
      if (respuesta.status === 200) {
        //cargar los datos 
        setNews(respuesta)
      }
    });
  }, []);

   useEffect(() => {
    consultarAPI().then((respuesta) => {
      if (respuesta.status === 200) {
        //cargar los datos 
        setNuevo(respuesta)
      }
    });
  }, [searchState]);

  return (
<BrowserRouter>
      <Container fluid className="d-flex flex-column min-vh-100 px-0">
        <NavbarMain searchState={searchState} setSearchState={setSearchState} usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado} />
          <Routes>
            <Route exact path="/" element={<Main searchState={searchState} setSearchState={setSearchState } />} />
            <Route exact path="/PaginaContacto" element={<PaginaContacto />} />
            <Route path="*" element={<Error404 />} />
            <Route
                    path="/Administrar/*"
                    element={
                        <RutasProtegidas>
                            <RutasAdmin></RutasAdmin>
                        </RutasProtegidas>
                    }
            />
            <Route path="/ArticleDetail/:id"  element={<ArticleDetail/>} />
            <Route exact path="/usuario/login" element={<Login setUsuarioLogueado={setUsuarioLogueado} />} />
            <Route exact path="/usuario/registro" element={<Registro setUsuarioLogueado={setUsuarioLogueado} />} />
            <Route exact path="/search" element={<Search News={News} searchState={searchState} setSearchState={setSearchState} />} />
          </Routes >
          <Footer />
      </Container>
</BrowserRouter>
  );
}
export default App;