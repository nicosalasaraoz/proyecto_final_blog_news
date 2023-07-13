import React from "react";
import { Button, Card, Container } from "react-bootstrap";

const Category = ({nuevo, category, setCategory}) =>{

    const art = nuevo.filter((article) => article.category === category);
    
    return(
        <>
            <Container className='d-flex justify-content-center'>
                <div className="category">
                    {art.map((article)=>(
                        <div key={article._id} className="Card">
                            <Card.Img variant="top" src={article.url}/>
                            <Card.Body>
                                <Card.Title>{article.title}</Card.Title>
                                <Card.Text>{article.description}</Card.Text>
                                <Button>Leer mas...</Button>
                            </Card.Body>
                        </div>
                    ))}
                </div>
            </Container>
        </>
    )
}

export default Category;