import React from "react";
import App from "../../containers/App";
import Footer from "../../components/footer";
import {
  Card,
  CardGroup,
  Container,
  Row,
  Col,
  ListGroup,
} from "react-bootstrap";
import "../sobre-cursos.css";

const geral_alunos = () => (
  <App>
    <Container
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginBottom: "10px",
        marginTop: "20px",
      }}
    >
      <Row>
        <Col>
          <p className="sbr-titulo">ÁREA DO ALUNO</p>
        </Col>
      </Row>
    </Container>

    <Container
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginBottom: "100px",
      }}
    >
      <Row xs={1} md={11} className="g-4">
        <Col>
          <p className="sbr-list-titulo">Lista de Opções</p>
          <ListGroup variant="flush">
            <a
              className="sbr-links"
              target="_blank"
              href="https://fatecsjc-prd.azurewebsites.net/downloads/calendario/calendario_2022-1.pdf"
            >
              <ListGroup.Item>Calendário Acadêmico</ListGroup.Item>
            </a>
            <a className="sbr-links" href="/email">
              <ListGroup.Item variant="warning">
                Email Institucional
              </ListGroup.Item>
            </a>
            <a className="sbr-links" href="/horarios_aula">
              <ListGroup.Item>Horários de Aula</ListGroup.Item>
            </a>
            <a className="sbr-links" href="/horarios_onibus">
              <ListGroup.Item variant="warning">
                Horários de ônibus
              </ListGroup.Item>
            </a>
            <a className="sbr-links" href="/monitoria">
              <ListGroup.Item>Monitoria</ListGroup.Item>
            </a>
            <a className="sbr-links" href="/moodle">
              <ListGroup.Item variant="warning">Moodle</ListGroup.Item>
            </a>
            <a className="sbr-links" href="/TG">
              <ListGroup.Item>Normas para TG</ListGroup.Item>
            </a>
            <a className="sbr-links" href="/passe">
              <ListGroup.Item variant="warning">Passe Escolar</ListGroup.Item>
            </a>
            <a className="sbr-links" href="/Portal">
              <ListGroup.Item>Portal de Oportunidades</ListGroup.Item>
            </a>
            <a className="sbr-links" href="/Portal">
              <ListGroup.Item variant="warning">
                Setor de Estágios
              </ListGroup.Item>
            </a>
          </ListGroup>
        </Col>
      </Row>
    </Container>

    <Footer />
  </App>
);

export default geral_alunos;
