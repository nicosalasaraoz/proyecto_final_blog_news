import { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { obtenerNewsAPI } from "../../helpers/queries";


const ArticleDetail = () => {
    const { id } = useParams();
    const [Art, setArt] = useState({});

    useEffect(() => {
        obtenerNewsAPI(id).then((respuesta) => {
            if (respuesta.status === 200) {
                setArt(respuesta.dato);
            }
        });
    }, [id]);

    return (
        <>
            <Container className="pt-4">
                <Card className="">
                <Row xs={1} md={1} lg={2}>
                    <Col>
                    <Card.Img variant="top" src={Art.url} />
                    </Col>
                    <Col>
                    <Container>
                        <Card.Text as="h1">{Art.title}</Card.Text>
                        <Container className="d-flex justify-content-between"></Container>
                <Card.Body>
                    <Card.Text>{Art.description}</Card.Text>
                </Card.Body>
                    </Container>
                    </Col>
                </Row>
                <Card.Body>
                    <Card.Text>{Art.content}</Card.Text>
                </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default ArticleDetail;
