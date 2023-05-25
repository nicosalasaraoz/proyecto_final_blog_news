//peticion GET para obtener todos los productos
//peticion POST crear un nuevo producto, en los login tambien lo puedo usar
//peticion PUT sirve para modificar un producto
//peticion DELETE sirve para borrar un producto

const URL = process.env.REACT_APP_API_NEWS;

export const consultarAPI = async()=>{
    try{
        const respuesta = await fetch(URL);
        const listaNews = await respuesta.json()
        // console.log(listaNews)
        return listaNews;
    }catch(error){
        console.log(error)
        return false;
    }
}

export const obtenerNewsAPI = async(id)=>{
    try{
        // console.log(URL)
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


export const crearProductoAPI = async(producto)=>{
    try{
        const respuesta = await fetch(URL, {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
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

export const login = async (usuario) => {
    try {
        //verificar si el email existe
        const respuesta = await fetch(URL);
        const listaUsuarios = await respuesta.json();
        //buscar el usuario que tiene el email
        const usuarioBuscado = listaUsuarios.find((itemUsuario) => itemUsuario.email === usuario.email);
        if (usuarioBuscado) {
            console.log("email encontrado");
            //verificar el password
            if (usuarioBuscado.password === usuario.password) {
                return usuarioBuscado;
            }
        } else {
            console.log("el mail no existe");
            return;
        }
    } catch (error) {
        console.log("error en el login");
        return;
    }
};
