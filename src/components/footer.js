import React from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';



const Footer = () => {
    return (

        <footer>
            <div className="footer">

                <div className="row m-0">
                        <div className="logo-footer w-100 text-center py-3">
                            <span className="logo-decoration"></span><strong>JGA</strong>LMEIDA
                        </div>
                </div>
            </div>
                <div className="white-row">
                        <div className="row mx-0 my-4">                            
                        <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 text-center">
                                <a href="https://github.com/jgalmeida93" className="social-footer"><FaGithubAlt size="2em"/></a>    
                            </div>
                            <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 text-center">
                                <a href="https://www.linkedin.com/in/jonas-gabriel-de-almeida-4ab460187/" className="social-footer">
                                        <FaLinkedin size="2em"/>
                                </a>
                            </div>
                            <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 text-center">
                                <a href="https://www.instagram.com/jgalmeida93/" className="social-footer"><FaInstagram size="2em"/></a>
                            </div>
                        </div>
                </div>

                <div className="by text-center mt-3">
                    <small>Criado por <a href="https://github.com/jgalmeida93">Jonas Gabriel</a></small>
                </div>



        </footer>

    )
}

export default Footer;