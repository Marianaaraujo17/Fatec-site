import React from "react";
import Footer from "../components/footer";
import logo_api from "../components/images/logo_api.png";
import { Card, CardGroup, Container, Row, Col, Button } from "react-bootstrap";
import "./api.css";

import App from "../containers/App";

const api = () => (
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
      <p className="api-titulo">APRENDIZADO POR PROJETOS INTEGRADOS</p>
    </Container>

    <Container>
      <Row style={{ marginBottom: "40px" }}>
        <Col style={{ marginBottom: "15px" }} md={{ span: 12 }}>
          <h2 className="api-h2">Aprendizagem por Projetos Integrados</h2>
        </Col>
        <Col md={10}>
          <p className="api-p" id="espaco">
            A API (Aprendizagem por Projetos Integrados), desenvolvida no escopo
            do{" "}
            <a id="cor" target="_blank" href="/cadi">
              CADI
            </a>
            , é a metodologia de ensino em implantação na Fatec São José dos
            Campos, desde o Segundo Semestre de 2019 (nos cursos da área de
            Computação, porém, a metodologia estará completamente implantada em
            todos os períodos até Primeiro Semestre de 2022).
          </p>

          <p className="api-p" id="espaco">
            Vídeos de apresentação dos resultados finais nas disciplinas de
            Projetos Integradores da FATEC São José dos Campos – Prof. Jessen
            Vidal.
          </p>

          <p className="api-p" id="espaco">
            <a id="cor" target="_blank" href="/cadi">
              Turmas 2020-1
            </a>{" "}
            <br />
            <a id="cor" target="_blank" href="/cadi">
              Turmas 2020-2
            </a>
            <br />
            <a id="cor" target="_blank" href="/cadi">
              Turmas 2021-1
            </a>
          </p>

          <h2 className="api-h2">Pilares da API</h2>
        </Col>
        <Col md={2}>
          <img src={logo_api} width={100} height={100}></img>
        </Col>
      </Row>
    </Container>

    <Footer />
  </App>
);

export default api;
