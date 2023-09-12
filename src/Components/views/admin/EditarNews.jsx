/* eslint-disable */

import { useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { editarNewsAPI, obtenerNewsAPI } from "../../helpers/queries";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const EditarNews = () => {
  const { id } = useParams();
  const {register, handleSubmit, formState: { errors }, setValue} = useForm();
  const navegacion = useNavigate();

  useEffect(() => {
    obtenerNewsAPI(id).then((respuesta) => {
      if (respuesta.status === 200) {
       
        (respuesta)
        setValue('category',respuesta.dato.category);
        setValue('content',respuesta.dato.content);
        setValue('description',respuesta.dato.description);
        setValue('title',respuesta.dato.title);
        setValue('url',respuesta.dato.url);
      }
    });
  }, []);

  const onSubmit = (noticiaEditado) => {
    
    let token = JSON.parse(localStorage.getItem("usuarioLogueado")).token;
    editarNewsAPI(id, noticiaEditado, token).then((respuesta)=>{
      if(respuesta.status === 200){
        Swal.fire('Producto modificado', 'El producto fue modificado correctamente', 'success');
        navegacion('/administrar');
      }else{
        Swal.fire('Ocurrio un error', 'El producto no pudo ser modificado', 'error')
      }
    })
  };

  return (
    <>
    <Container className="mainSection mb-5">
      <section className="container my-3">
        <h3 className="display-4">Editar Producto</h3>
      </section>
      <section className="container my-3">
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Titulo"
              {...register("title", {
                required: "El nombre de la noticia es un dato obligatorio",
                minLength: {
                  value: 2,
                  message: "La cantidad minima de caracteres debe ser 2",
                },
                maxLength: {
                  value: 10000,
                  message: "La cantidad maxima de caracteres es de 10000",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.title?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Descripcion</Form.Label>
           <Form.Control
              required
              type="text"
              placeholder="Descripcion"
              {...register("description", {
                required: "La descripcion de la noticia es un dato obligatorio",
                minLength: {
                  value: 2,
                  message: "La cantidad minima de caracteres debe ser 2",
                },
                maxLength: {
                  value: 10000,
                  message: "La cantidad maxima de caracteres es de 10000",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.description?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Contenido</Form.Label>
           <Form.Control
              required
              type="text"
              placeholder="Contenido"
              {...register("content", {
                required: "El contenido de la noticia es un dato obligatorio",
                minLength: {
                  value: 2,
                  message: "La cantidad minima de caracteres debe ser 2",
                },
                maxLength: {
                  value: 10000,
                  message: "La cantidad maxima de caracteres es de 10000",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.content?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Imagen URL</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Ej:'https://....'"
              {...register("url", {
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
            {...register('category',{
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
                {errors.category?.message}
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
      </section>
      </Container>
    </>
  );
};

export default EditarNews;
