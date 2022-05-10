import React from "react";
import { Card, CardGroup, Container, Row, Col, Table } from "react-bootstrap";
import Footer from "../components/footer";
import App from "../containers/App";
import onibus from "../components/images/onibus.png";
import "./onibus.css";

const horarios_onibus = () => (
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
          <p className="onibus-titulo">Horários de Ônibus</p>
        </Col>
      </Row>
    </Container>

    <Container style={{ marginBottom: "50px", textAlign: "justify" }}>
      <Row>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="onibus-subtitulo">Município de São José dos Campos</p>
          <p className="onibus-p">Número da Linha: 200</p>
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
          <img className="onibus-imagens" src={onibus}></img>
        </Col>
      </Row>
    </Container>
    <Footer />
  </App>
);

export default horarios_onibus;
