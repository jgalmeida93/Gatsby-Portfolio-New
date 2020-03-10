import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import '../styles/style.scss';
import Foto from '../images/perfil.jpg';
import { FaGithubAlt } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';



const Sobre = () => {
    return (
        <Container className="sobre">
            <h2 className="sobre-texto" id="sobre">SOBRE MIM</h2>
            <Row className="sobre flex-column-reverse flex-sm-row">
                <Col sm={12} md={12} lg={7} xl={7}>
                    <p className="texto-sobre">
                        Meu nome é Jonas e sou apaixonado por Front End. Estou em busca de oportunidades para crescer na carreira. 
                        Tenho determinação e vontade de aprender coisas novas.
                        </p>
                        <h6 className="stronger">Experiência</h6>
                        <p>
                        Tenho experiência com Angular, HTML, CSS, JavaScript
                        </p>
                        <h6 className="stronger">Estudando</h6>
                        <p>
                        ReactJS, GatbsyJS, PHP e Laravel. 
                        </p>

                    <Row className="mt-5">
                        <Col sm={12} md={12} lg={4} xl={4} className="text-center">
                            <a href="https://github.com/jgalmeida93" className="btn btn-block btn-main"><FaGithubAlt size="2em"/></a>
                        </Col>
                        <Col sm={12} md={12} lg={4} xl={4} className="text-center">
                            <a href="https://www.linkedin.com/in/jonas-gabriel-de-almeida-4ab460187/" className="btn btn-block btn-main">
                                    <FaLinkedin size="2em"/>
                            </a>
                        </Col>
                        <Col sm={12} md={12} lg={4} xl={4} className="text-center">
                            <a href="https://www.instagram.com/jgalmeida93/" className="btn btn-block btn-main"><FaInstagram size="2em"/></a>
                        </Col>
                    </Row>
                </Col>
                <Col sm={12} md={12} lg={5} xl={5}>
                    <img src={Foto} alt="foto do desenvolvedor" className="rounded-circle img-fluid d-block mx-auto foto-jonas" width="80%" />
                </Col>
            </Row>
        </Container>
       
    )
}

export default Sobre;