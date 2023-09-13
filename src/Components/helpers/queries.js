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

export const crearNewsAPI = async(producto, token)=>{
    try{
        const respuesta = await fetch(URL,{
            
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "x-token": token
            },
            body: JSON.stringify(producto) 
        });
        return respuesta;
    }catch(error){
        console.log(error)
        return false;
    }
}

export const editarNewsAPI = async(id, noticiaEditado, token)=>{
    try{
        const respuesta = await fetch(URL+'/'+id,{
            method: "PUT",
            headers:{
                "Content-Type":"application/json",
                "x-token": token
            },
            body: JSON.stringify(noticiaEditado)
        });
     return respuesta;
    }catch(error){
        console.log(error)
        return false;
    }
}

export const borrarNewsAPI = async(id)=>{
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
            usuario: datos.nombre,
            token: datos.token,
            mensaje: datos.mensaje,
            rol: datos.rol
        };
    } catch (error) {
        return false;
    }
};
