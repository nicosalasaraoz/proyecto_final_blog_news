import React, { useState, useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";


const Search = ({nuevo, searchState}) => {
  
  const [articles, setArticles] = useState([]);

  useEffect(() => {prueba();
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [searchState]);

  const prueba = () =>{
    
    let res = nuevo.filter((dato) => dato.title.toLowerCase().includes(searchState.toLowerCase()));
    setArticles(res);
  } 
  
  return (
    <>
      <Container>
        <div className="Buscador cards">
          {articles[0]?(articles.map((article) => (
            <div key={article._id} className="Card">
              <Card.Img variant="top" src={article.url} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
                <Button >leer más..</Button>
              </Card.Body>
            </div>))):(<h1 className="buscadorMessage">No se encontraron resultados para : "{searchState}"</h1>)}
        </div>
      </Container>
    </>
  );
};

export default Search;