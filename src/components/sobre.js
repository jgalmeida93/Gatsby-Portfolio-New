import React from 'react';

import '../styles/style.scss';
import Foto from '../images/perfil.jpg';
import { FaGithubAlt } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';



const Sobre = () => {
    return (
        <div className="container sobre" >
             <h2 className="sobre-texto" id="sobre">SOBRE MIM</h2>
            <div className="row sobre flex-column-reverse flex-sm-row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7" >
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
                    <div className="row mt-5">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 text-center">
                        <a href="https://github.com/jgalmeida93" className="btn btn-block btn-main"><FaGithubAlt size="2em"/></a>             
                            
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 text-center">
                        <a href="https://www.linkedin.com/in/jonas-gabriel-de-almeida-4ab460187/" className="btn btn-block btn-main">
                                <FaLinkedin size="2em"/>
                        </a>
                            
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 text-center">
                            <a href="https://www.instagram.com/jgalmeida93/" className="btn btn-block btn-main"><FaInstagram size="2em"/></a>
                        </div>
                    </div>

                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                    <img src={Foto} alt="foto do desenvolvedor" className="rounded-circle img-fluid d-block mx-auto foto-jonas" width="80%" />
                </div>
            </div>
        </div>
    )
}

export default Sobre;