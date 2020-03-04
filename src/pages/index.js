import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap";
import '../styles/style.scss';

import Menu from '../components/menu';



const IndexPage = () => (
  <div>
    <header>
      <div className="container">
      <Menu />

      <div className="row menu-header">
      <div className="col-12 align-self-center">
        <h1 className="m-auto banner-text">FULL STACK DEVELOPER</h1>
      </div>

      </div>

      </div>

    </header>

 </div>
)

export default IndexPage
