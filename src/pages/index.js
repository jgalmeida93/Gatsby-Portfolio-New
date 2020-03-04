import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap";
import '../styles/style.scss';

import Menu from '../components/menu';



const IndexPage = () => (
  <div>
    <header>
      <div className="container">
      <Menu />

      <div className="flex m-auto ">
        <h1 className="m-auto">FULL STACK DEVELOPER</h1>
      </div>

      </div>

    </header>

 </div>
)

export default IndexPage
