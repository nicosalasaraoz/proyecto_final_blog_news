import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiLike } from "react-icons/bi";
import { consultarAPI } from "../../helpers/queries";

const Articles = () => {
  
  const [art, setArt] = useState([]);
  const { id, title, url } = { ...art };
  useEffect(() => {
    consultarAPI().then((respuesta) => {
      console.log(respuesta)
      if (respuesta.status === 200) {
        //cargar los datos 
        setArt(respuesta)
      }
    });
  }, []);
        console.log(art)
  return (
    <>
    <div className="Card">
      <Card.Img variant="top" src={url} className="p-1" />
      <Card.Body className="CardBody">
        <Card.Text className="px-2 text-center">{title}</Card.Text>
      </Card.Body>
      <div className="mt-auto btns text-white">
        <Link className="btn" to={`/ArticleDetail/${id}`}>
          Ir al articulo
        </Link>
        <Link
          to="/error404"
          className=" btn like d-flex text-white"
        >
          <BiLike />
        </Link>
      </div>
    </div>
    </>
  );
};
export default Articles;
