import { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { obtenerProductoAPI } from "../../helpers/queries";


const ArticleDetail = () => {
    const { id } = useParams();
    const [Art, setArt] = useState({});

    useEffect(() => {
        obtenerProductoAPI(id).then((respuesta) => {
          if (respuesta.status === 200) {
            //cargar los datos 
            setArt(respuesta)
          }
        });
      }, []);

    return (
        <>
            <Container className="pt-4">
                <Card className="">
                <Row>
                    <Col>
                    <Card.Img variant="top" src={Art.dato?.url} />
                    </Col>
                    <Col>
                    <Container>
                        <Card.Text as="h1">{Art.dato?.title}</Card.Text>
                        <Container className="d-flex justify-content-between"></Container>
                    </Container>
                    </Col>
                </Row>
                <Card.Body>
                    <Card.Text>{Art.dato?.description}</Card.Text>
                </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default ArticleDetail;
