import React from "react"
import { Helmet } from 'react-helmet';

import '../styles/style.scss';
import Menu from '../components/menu';
import Header from '../components/header';
import Sobre from '../components/sobre';
import Trabalhos from '../components/trabalhos';
import Contato from '../components/contato';
import Footer from '../components/footer';


const IndexPage = () => (
  <div id="topo">
    <Helmet>
      <title>JGALMEIDA</title>
    </Helmet>
    <header>
      <Header />
    </header>

      <Sobre />
      <Trabalhos />
      <Contato />
      <Footer />
 </div>
)

export default IndexPage
