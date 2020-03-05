import React from 'react';
import { Link } from "gatsby";

import '../styles/style.scss';
import Foto from '../images/perfil.jpg';
import { FaGithubAlt } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';



const Sobre = () => {
    return (
        <div className="container sobre" >
            <div className="row sobre">
                <div className="col-7" id="sobre">
                    <h2>SOBRE MIM</h2>
                    <p className="texto-sobre">
                    Meu nome é Jonas e sou apaixonado por Front End. Estou em busca de oportunidades para crescer na carreira. 
                    Atualmente estou Júnior, com muita garra e vontade de aprender coisas novas.
                    </p>
                    <p>
                        <h6>Experiência</h6>
                    Tenho experiência com Angular, HTML, CSS, JavaScript
                    </p>
                    <h6>Estudando</h6>
                    <p>
                    ReactJS, GatbsyJS, PHP e Laravel. 
                    </p>
                    <div className="row mt-5">
                        <div className="col-4 text-center">
                        <a href="https://github.com/jgalmeida93" className="btn btn-block btn-danger"><FaGithubAlt size="2em"/></a>             
                            
                        </div>
                        <div className="col-4 text-center">
                        <a href="https://www.linkedin.com/in/jonas-gabriel-de-almeida-4ab460187/" className="btn btn-block btn-danger">
                                <FaLinkedin size="2em"/>
                        </a>
                            
                        </div>
                        <div className="col-4 text-center">
                            <a href="https://www.instagram.com/jgalmeida93/" className="btn btn-block btn-danger"><FaInstagram size="2em"/></a>
                        </div>
                    </div>

                </div>
                <div className="col-5">
                    <img src={Foto} alt="foto do desenvolvedor" className="rounded-circle img-fluid d-block mx-auto" width="80%" />
                </div>
            </div>
        </div>
    )
}

export default Sobre;