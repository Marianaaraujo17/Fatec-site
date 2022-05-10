import React from "react";
import { Card, CardGroup, Container, Row, Col, Table } from "react-bootstrap";
import Footer from "../components/footer";
import App from "../containers/App";
import "./tg.css";

const TG = () => (
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
          <p className="tg-titulo">Normas para TG</p>
        </Col>
      </Row>
    </Container>

    <Container style={{ marginBottom: "50px", textAlign: "justify" }}>
      <Row>
        <Col md={{ span: 12 }} style={{ marginBottom: "40px" }}>
          <p className="moodle-p">
            Abaixo estão inseridos alguns fundamentos básicos para que o
            Trabalho de Graduação da FATEC - SJC seja formalizado.
          </p>
          <p className="monitoria-p">
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/tcc/proc_orientacao_confec_aval_tg.pdf"
            >
              - Orientações sobre Trabalho de Graduação
            </a>
            <br />
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/tcc/anexo_2_manual_confeccao_tg.pdf"
            >
              - Anexo 2 - Manual de Trabalho de Graduação - FATEC-SJC
            </a>
            <br />
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/normas-para-tg.php#:~:text=Anexo%203%20%2D%20Ficha%20de%20avalia%C3%A7%C3%A3o%20de%20qualifica%C3%A7%C3%A3o%20de%20Trabalho%20de%20Gradua%C3%A7%C3%A3o"
            >
              - Anexo 3 - Ficha de avaliação de qualificação de Trabalho de
              Graduação
            </a>
            <br />
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/normas-para-tg.php#:~:text=Anexo%204%20%2D%20Modelo%20de%20formaliza%C3%A7%C3%A3o%20de%20orienta%C3%A7%C3%A3o%20do%20Trabalho%20de%20Gradua%C3%A7%C3%A3o"
            >
              - Anexo 4 - Modelo de formalização de orientação do Trabalho de
              Graduação
            </a>
            <br />
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/normas-para-tg.php#:~:text=Anexo%205.A%20%2D%20Modelo%20do%20Trabalho%20de%20Gradua%C3%A7%C3%A3o"
            >
              - Anexo 5.A - Modelo do Trabalho de Graduação
            </a>
            <br />
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/normas-para-tg.php#:~:text=Anexo%205.B%20%2D%20Modelo%20do%20Trabalho%20de%20Gradua%C3%A7%C3%A3o%20%2D%20Cursos%20do%20Eixo%20Aeron%C3%A1utico"
            >
              - Anexo 5.B - Modelo do Trabalho de Graduação - Cursos do Eixo
              Aeronáutico
            </a>
            <br />
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/normas-para-tg.php#:~:text=Anexo%206%20%2D%20Modelo%20da%20apresenta%C3%A7%C3%A3o%20do%20Trabalho%20de%20Gradua%C3%A7%C3%A3o"
            >
              - Anexo 6 - Modelo da apresentação do Trabalho de Graduação
            </a>
            <br />
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/normas-para-tg.php#:~:text=Anexo%207%20%2D%20Ficha%20de%20avalia%C3%A7%C3%A3o%20de%20defesa"
            >
              - Anexo 7 - Ficha de avaliação de defesa
            </a>
            <br />
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/normas-para-tg.php#:~:text=Anexo%208%20%2D%20Modelo%20de%20Relat%C3%B3rio%20de%20Projeto%20Interdisciplinar%20(Log%C3%ADstica)"
            >
              - Anexo 8 - Modelo de Relatório de Projeto Interdisciplinar
              (Logística)
            </a>
            <br />
            <a
              id="cor2"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/normas-para-tg.php#:~:text=Anexo%20%2D%20Revis%C3%A3o%20de%20notas%20por%20compet%C3%AAncia%20(Log%C3%ADstica)"
            >
              - Anexo - Revisão de notas por competência (Logística)
            </a>
          </p>
        </Col>
      </Row>
    </Container>
    <Footer />
  </App>
);

export default TG;
