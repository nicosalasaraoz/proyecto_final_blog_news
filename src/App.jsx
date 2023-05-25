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
import Administrador from "./Components/views/admin/Administrador";
import CrearNews from "./Components/views/admin/CrearNews";
import EditarNews from "./Components/views/admin/EditarNews";
import { useState, useEffect } from "react";
import { consultarAPI } from "./Components/helpers/queries";
import Login from "./Components/views/Login";

function App() {
  const usuario = JSON.parse(localStorage.getItem("tokenUsuario")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);
  const [searchState, setSearchState] = useState('');
  const [News, setNews] = useState([]);
  
  useEffect(() => {
    consultarAPI().then((respuesta) => {
      if (respuesta.status === 200) {
        //cargar los datos 
        setNews(respuesta)
        // console.log(respuesta)
      }
    });
  }, []);
  // console.log(News)
  return (
<BrowserRouter>
      <Container fluid className="d-flex flex-column min-vh-100 px-0">
        <NavbarMain searchState={searchState} setSearchState={setSearchState} usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado} />
          <Routes>
            <Route exact path="/" element={<Main News={News} searchState={searchState} setSearchState={setSearchState } />} />
            <Route exact path="/PaginaContacto" element={<PaginaContacto />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/ArticleDetail/:id"  element={<ArticleDetail/>} />
            <Route exact path="/Administrar" element={<Administrador News={News} />} />
            <Route exact path="/Administrar/crear" element={<CrearNews />} />
            <Route exact path="/Administrar/editar/:id" element={<EditarNews />} />
            <Route exact path="/usuario/login" element={<Login setUsuarioLogueado={setUsuarioLogueado} />} />
            <Route exact path="/search" element={<Search News={News} searchState={searchState} setSearchState={setSearchState} />} />
            {/* <Route path="/Administrar/*"element={
                        <RutasProtegidas>
                            <RutasAdmin/>
                        </RutasProtegidas>
                    }
                /> */}
          </Routes >
          <Footer />
      </Container>
</BrowserRouter>
  );
}
export default App;