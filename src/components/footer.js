import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { FaGithubAlt } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';



const Footer = () => {
    return (

        <footer>
                <Row className="m-0">
                    <Col>
                        <div className="logo-footer w-100 text-center pt-3">
                            <a href="#topo" className="footer-logo"><span className="logo-decoration"></span><strong>JGA</strong>LMEIDA</a>
                        </div>
                    </Col>
                </Row>
                <div className="white-row mt-5">
                    <Row className="mx-0 my-4">
                        <Col sm={4} md={4} lg={4} xl={4} className="text-center">
                            <a href="https://github.com/jgalmeida93" className="social-footer"><FaGithubAlt size="2em"/></a>
                        </Col>
                        <Col sm={4} md={4} lg={4} xl={4} className="text-center">
                            <a href="https://www.linkedin.com/in/jonas-gabriel-de-almeida-4ab460187/" className="social-footer">
                                <FaLinkedin size="2em"/>
                            </a>
                        </Col>
                        <Col sm={4} md={4} lg={4} xl={4} className="text-center">
                            <a href="https://www.instagram.com/jgalmeida93/" className="social-footer"><FaInstagram size="2em"/></a>
                        </Col>
                    </Row>
                </div>

                <Row>
                    <Col className="text-center by">
                        <small>Criado por <a href="https://github.com/jgalmeida93">Jonas Gabriel</a></small>
                    </Col>
                </Row>
        </footer>

    )
}

export default Footer;