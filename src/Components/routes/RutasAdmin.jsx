import { Routes, Route } from "react-router-dom";
import Administrador from "../views/admin/Administrador";
import CrearNews from "../views/admin/CrearNews";
import EditarNews from "../views/admin/EditarNews";

const RutasAdmin = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Administrador/>} />
                <Route exact path="/crear" element={<CrearNews />} />
                <Route exact path="/editar/:id" element={<EditarNews />} />
            </Routes>
        </>
    );
};

export default RutasAdmin;
