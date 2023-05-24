import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiLike } from "react-icons/bi";

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
        <Link className="btn" to={`/ArticleDetail/${_id}`}>
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
