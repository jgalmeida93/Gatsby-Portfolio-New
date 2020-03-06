import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Trabalhos = () => {
    return (

        <Container>
            <h2 id="trabalhos">TRABALHOS</h2> 
            <br />
            <h6>Aqui estão alguns dos trabalhos que desenvolvi</h6>
            <Row>
                <Col sm={12} md={12} lg={6} xl={6} className="my-3 align-self-center">
                    <div className="border d-block bg-dark trabalhos rounded">
                        <h4 className="trabalhos-texto d-block">Em breve</h4>
                    </div>
                    <small>Legenda</small>
                </Col>
                <Col sm={12} md={12} lg={6} xl={6} className="my-3 align-self-center">
                    <div className="border d-block bg-dark trabalhos rounded">
                        <h4 className="trabalhos-texto d-block">Em breve</h4>
                    </div>
                    <small>Legenda</small>
                </Col>
                <Col sm={12} md={12} lg={6} xl={6} className="my-3 align-self-center">
                    <div className="border d-block bg-dark trabalhos rounded">
                        <h4 className="trabalhos-texto d-block">Em breve</h4>
                    </div>
                    <small>Legenda</small>
                </Col>
                <Col sm={12} md={12} lg={6} xl={6} className="my-3 align-self-center">
                    <div className="border d-block bg-dark trabalhos rounded">
                        <h4 className="trabalhos-texto d-block">Em breve</h4>
                    </div>
                    <small>Legenda</small>
                </Col>
            </Row>
        </Container>
        
    )
}

export default Trabalhos;