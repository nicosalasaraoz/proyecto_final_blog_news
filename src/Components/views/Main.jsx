import React from "react";
import { Container, Row} from 'react-bootstrap';
import Header from "./Header";  
import Articles from "./news/Articles";



<<<<<<< HEAD
const Main = ({ News, setSearchState, searchState}) => {
  
  return (
    <>
      <Header setSearchState={setSearchState} searchState={searchState}/>
=======
const Main = ({ News}) => {
  return (
    <>
      <Header/>
>>>>>>> 1bc5c7ea3e98588b0efbbf83cc6c3d52a6702f2f
      <Container>
      <h1 className="display-3 py-3 text-center">Artículos destacados</h1>
      <hr />
      <div className="cards">
        {
            News.map((Art)=> <Articles key={Art.id} Art={Art}></Articles>)            
        }
      </div>
    </Container>
<<<<<<< HEAD
    {/* <Search setSearchState={searchState}/> */}
=======
>>>>>>> 1bc5c7ea3e98588b0efbbf83cc6c3d52a6702f2f
    </>
  );
};
export default Main;
