import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Articles = ({Art}) => {
  const { _id, title, url } = { ...Art };
  

  return (
    <>
    <div className="Card">
      <Card.Img variant="top" src={url} className="p-1" />
      <Card.Body className="CardBody">
        <Card.Text className="px-2 text-center">{title}</Card.Text>
      </Card.Body>
      <div className="mt-auto btns text-white">
        <Link className="btn text-white" to={`/ArticleDetail/${_id}`}>
          Ir al articulo
        </Link>
      </div>
    </div>
    </>
  );
};
export default Articles;
