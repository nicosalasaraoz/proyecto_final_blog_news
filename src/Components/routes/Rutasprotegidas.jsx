import { Navigate } from "react-router-dom";
const RutasProtegidas = ({ children }) => {
    const token = JSON.parse(localStorage.getItem("usuarioLogueado")) || null;
    if (!token) {

        return <Navigate to={"/"}></Navigate>;
    } else {
        return children;
    }
};

export default RutasProtegidas;
