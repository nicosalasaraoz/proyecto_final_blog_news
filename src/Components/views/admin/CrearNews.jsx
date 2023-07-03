import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { crearNewsAPI } from "../../helpers/queries";
import { useNavigate } from "react-router-dom";

const CrearNews = () => {
  const {register,handleSubmit,formState: { errors },reset} = useForm();
  //inicializar useNavigate
  const navegacion = useNavigate();

  const onSubmit = (data) => {
    //enviar la peticion a la API
    crearNewsAPI(data).then((respuesta)=>{
      if(respuesta.status===201){
        Swal.fire('Noticia creada', 'La noticia fue correctamente creada','success')
        //aqui quiero resetear los value del formulario
        reset();
        //redireccionar al usuario a la pagina de administracion
        navegacion('/Administrar');
      }else{
        Swal.fire('Ocurrio un error', 'Intente esta operacion en unos minutos','error')
      }
    })
  };

  return (
    <Container className="mainSection">
      <section className="container my-3">
        <h3 className="display-4">Nueva Noticia</h3>
        <hr />
      </section>
      <section className="container my-3">
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Titulo"
              {...register("tituloNoticia", {
                required: "El nombre de la noticia es un dato obligatorio",
                minLength: {
                  value: 2,
                  message: "La cantidad minima de caracteres debe ser 2",
                },
                maxLength: {
                  value: 200,
                  message: "La cantidad maxima de caracteres es de 20",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.tituloNoticia?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Descripcion</Form.Label>
           <Form.Control
              required
              type="text"
              placeholder="Descripcion"
              {...register("descripcionNoticia", {
                required: "La descripcion de la noticia es un dato obligatorio",
                minLength: {
                  value: 2,
                  message: "La cantidad minima de caracteres debe ser 2",
                },
                maxLength: {
                  value: 200,
                  message: "La cantidad maxima de caracteres es de 20",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.descripcionNoticia?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Imagen URL</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Ej:'https://....'"
              {...register("imagen", {
                required: "La URL de la imagen es obligatorio",
                pattern: {
                  value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                  message: "Debe ingresar una URL valida",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.url?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Select aria-label="Default select example"
            {...register('categoria',{
                required:'Debe seleccionar una categoria'
            })}
            >
              <option value="">Seleccione una opción...</option>
              <option value="Deporte">Deporte</option>
              <option value="Economia">Economia</option>
              <option value="Mundo">Mundo</option>
              <option value="Espectaculos">Espectaculos</option>
              <option value="Opinion">Opinion</option>
              <option value="Politica">Politica</option>
            </Form.Select>
            <Form.Text className="text-danger">
                {errors.categoria?.message}
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
      </section>
    </Container>
  );
};

export default CrearNews;
