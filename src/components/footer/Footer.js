import React from "react";
import { Col, Container } from "react-bootstrap";
import cps from "../images/cps.png";
import governo from "../images/governo.png";
import logo from "../images/logo.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => (
  <footer className="app-footer">
    <div id="rodape">
      <Col id="centro">
        <img id="logo" src={logo} />
        <img id="cps" src={cps} />
        <img id="governo" src={governo} />
      </Col>

      <Container>
        <Col id="texto">
          <a id="palavra" href="/">
            Home
          </a>
          <a id="palavra" href="/sobre">
            Institucional
          </a>
          <a id="palavra" href="/sobre_cursos">
            Cursos
          </a>
          <a id="palavra" href="/geral_projetos">
            Projetos
          </a>
          <a id="palavra" href="/geral_alunos">
            Área do aluno
          </a>
          <a id="palavra" href="/contato">
            Contato
          </a>
        </Col>

        <hr id="linha" />
        <Col id="icons">
          <FaFacebookF />
          <FaLinkedinIn />
          <FaInstagram />
          <FaYoutube />
          <FaEnvelope />
        </Col>

        <a id="nomes">
          Faculdade de Tecnologia de São José dos Campos - Prof. Jessen Vidal |
          Feito por Brendo Bubela e Mariana Araujo
        </a>
      </Container>
    </div>
  </footer>
);

export default Footer;
