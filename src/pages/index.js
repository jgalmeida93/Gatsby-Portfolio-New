import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap";
import '../styles/style.scss';
import Menu from '../components/menu';
import Header from '../components/header';
import Sobre from '../components/sobre';
import Trabalhos from '../components/trabalhos';



const IndexPage = () => (
  <div>
    <header>
      <div className="container">
      <Menu />
      <Header />



      </div>

    </header>

      <Sobre />
      <Trabalhos />
 </div>
)

export default IndexPage
