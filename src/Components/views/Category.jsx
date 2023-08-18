import React from "react";
import { Card, Container, CardGroup} from "react-bootstrap";
import { Link } from "react-router-dom";

const Category = ({nuevo, category}) =>{

    const art = nuevo.filter((article) => article.category === category);

    return(
        <>
            <Container className='justify-content-center'>
                <CardGroup>
                <div className="category cards">
                    {art.map((article)=>(
                        <div key={article._id} className="Card">
                            <Card.Img variant="top" src={article.url}/>
                            <Card.Body>
                                <Card.Title>{article.title}</Card.Title>
                                <Card.Text>{article.description}</Card.Text>
                                 <Link className="btn text-white" to={`/ArticleDetail/${article._id}`}>Leer mas...</Link>
                            </Card.Body>
                        </div>
                    ))}
                </div>
                </CardGroup>
            </Container>
        </>
    )
}

export default Category;