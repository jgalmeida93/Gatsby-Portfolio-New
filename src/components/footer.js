import React from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';



const Footer = () => {
    return (

        <footer>
            <div className="footer">

                <div className="row">
                        <div className="logo-footer w-100 text-center py-3">
                            <span className="logo-decoration"></span><strong>JGA</strong>LMEIDA
                        </div>
                </div>

                <div className="row">
                    <div className="white-row">
                        <div className="row my-4">                            
                        <div className="col-4 text-center">
                                <a href="https://github.com/jgalmeida93" className="social-footer"><FaGithubAlt size="2em"/></a>    
                            </div>
                            <div className="col-4 text-center">
                                <a href="https://www.linkedin.com/in/jonas-gabriel-de-almeida-4ab460187/" className="social-footer">
                                        <FaLinkedin size="2em"/>
                                </a>
                            </div>
                            <div className="col-4 text-center">
                                <a href="https://www.instagram.com/jgalmeida93/" className="social-footer"><FaInstagram size="2em"/></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </footer>

    )
}

export default Footer;