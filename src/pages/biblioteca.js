import React from "react";
import Footer from "../components/footer";
import App from "../containers/App";
import { Card, CardGroup, Container, Row, Col, Button } from "react-bootstrap";
import "./biblioteca.css";

const biblioteca = () => (
  <App>
    <Container
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginBottom: "50px",
      }}
    >
      <p className="titulo">BIBLIOTECA</p>
    </Container>
    <Container>
      <Row>
        <p id="subtitulo">Empréstimo de Livros</p>
        <p id="espaco">
          Em vista às normas sanitárias do CPS, os alunos deverão solicitar o
          empréstimo de livros através do e-mail{" "}
          <mark id="marca">daniel.morais01@fatec.sp.gov.br</mark>
        </p>
      </Row>
    </Container>
    <Footer />
  </App>
);

export default biblioteca;
