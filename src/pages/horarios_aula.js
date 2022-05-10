import React from "react";
import { Card, CardGroup, Container, Row, Col, Table } from "react-bootstrap";
import Footer from "../components/footer";
import App from "../containers/App";
import aulas from "../components/images/aulas.png";
import mapa_sala from "../components/images/mapa_sala.png";
import "./aulas.css";

const horarios_aula = () => (
  <App>
    <Container
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginBottom: "50px",
        marginTop: "20px",
      }}
    >
      <Row>
        <Col style={{ marginTop: "30px" }}>
          <p className="aula-titulo">Horários de Aula</p>
          <p className="aula-p">1º Semestre de 2022</p>
        </Col>
      </Row>
    </Container>

    <Container style={{ marginBottom: "50px", textAlign: "justify" }}>
      <Row>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="aula-p">
            Para maiores informações entre em contato com a Secretaria Acadêmica
            <mark id="marca">f146.secretaria@fatec.sp.gov.br</mark>
          </p>
          <hr />
        </Col>
        <Col
          md={{ span: 12 }}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img className="aulas-imagens" src={aulas}></img>
        </Col>
        <Col
          md={{ span: 12 }}
          style={{ marginBottom: "40px", marginTop: "50px" }}
        >
          <p className="aula-subtitulo">Mapa de Salas</p>
        </Col>
        <Col
          md={{ span: 12 }}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img className="aulas-imagens" src={mapa_sala}></img>
        </Col>
      </Row>
    </Container>
    <Footer />
  </App>
);

export default horarios_aula;
