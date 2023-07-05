//peticion GET para obtener todos los productos
//peticion POST crear un nuevo producto, en los login tambien lo puedo usar
//peticion PUT sirve para modificar un producto
//peticion DELETE sirve para borrar un producto

const URL = process.env.REACT_APP_API_NEWS;
const URLlogin = process.env.REACT_APP_API_LOGIN;
const URLRegister = process.env.REACT_APP_API_REGISTER;

export const consultarAPI = async()=>{
    try{
        const respuesta = await fetch(URL);
        const listaNews = await respuesta.json()
        
        return listaNews;
    }catch(error){
        console.log(error)
        return false;
    }
}

export const obtenerNewsAPI = async(id)=>{
    try{
        const respuesta = await fetch(URL+'/'+id);
        const art ={
            dato: await respuesta.json(),
            status: respuesta.status
        }
     return art;
    }catch(error){
        console.log(error)
        return false;
    }
}

export const crearNewsAPI = async(producto)=>{
    try{
        const respuesta = await fetch(URL,{
            
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(producto) 
        });
        return respuesta;
    }catch(error){
        console.log(error)
        return false;
    }
}

export const editarProductoAPI = async(id, producto)=>{
    try{
        // console.log(URL)
        const respuesta = await fetch(URL+'/'+id,{
            method: "PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(producto)
        });
     return respuesta;
    }catch(error){
        console.log(error)
        return false;
    }
}

export const borrarProductoAPI = async(id)=>{
    try{
        const respuesta = await fetch(URL+'/'+id , {
            method: "DELETE"
        });
        return respuesta;
    }catch(error){
        console.log(error)
        return false;
    }
}

//peticion POST (para agregar un USUARIO al servidor)//
export const crearUsuarioAPI = async (usuario) => {
    try {
        const respuesta = await fetch(URLRegister, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
        });
        
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const login = async (usuario) => {
        try {
        const respuesta = await fetch(URLlogin, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
        });
        const datos = await respuesta.json();
        return {
            status: respuesta.status,
            usuario: datos.usuario,
            token: datos.token,
            mensaje: datos.mensaje,
        };
    } catch (error) {
        return false;
    }
};
