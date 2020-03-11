import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"

const Trabalhos = () => {
  return (
    <Container>
      <h2 id="trabalhos">TRABALHOS</h2>
      <br />
      <h6>Aqui estão alguns dos trabalhos que desenvolvi</h6>
      <Row>
        <Col sm={12} md={12} lg={6} xl={6} className="my-3 align-self-center">
          <a
            href="https://project-swapi.netlify.com/"
            className="trabalhos-link"
            target="_blank"
          >
            <div className="border d-block trabalhos swapi rounded">
              <h4 className="trabalhos-texto d-block mt-5 text-uppercase">
                Star Wars
              </h4>
            </div>
          </a>
          <small>
            Estudo de consumo de API do Star Wars em ReacJS usando Semantic-UI e
            React-Icons
          </small>
        </Col>
        <Col sm={12} md={12} lg={6} xl={6} className="my-3 align-self-center">
          <a
            href="https://project-marvel.netlify.com/"
            className="trabalhos-link"
          >
            <div className="border d-block bg-dark trabalhos marvel rounded">
              <h4 className="trabalhos-texto d-block mt-5 text-uppercase">
                Project Marvel
              </h4>
            </div>
          </a>
          <small>
            Estudo de consumo de API da Marvel em ReactJS usando React Bootstrap
          </small>
        </Col>
        <Col sm={12} md={12} lg={6} xl={6} className="my-3 align-self-center">
          <div className="border d-block bg-dark trabalhos rounded">
            <h4 className="trabalhos-texto d-block mt-5 text-uppercase">
              Em breve
            </h4>
          </div>
          <small>Legenda</small>
        </Col>
        <Col sm={12} md={12} lg={6} xl={6} className="my-3 align-self-center">
          <div className="border d-block bg-dark trabalhos rounded">
            <h4 className="trabalhos-texto d-block mt-5 text-uppercase">
              Em breve
            </h4>
          </div>
          <small>Legenda</small>
        </Col>
      </Row>
    </Container>
  )
}

export default Trabalhos
