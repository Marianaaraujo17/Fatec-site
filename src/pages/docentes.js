import React from "react";
import App from "../containers/App";
import Footer from "../components/footer";
import {
  Card,
  CardGroup,
  Container,
  Row,
  Col,
  Button,
  ListGroup,
} from "react-bootstrap";
import "./docentes.css";

const docentes = () => (
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
      <Row>
        <Col>
          <p className="titulo">LISTA DE DOCENTES</p>
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
        marginBottom: "50px",
      }}
    >
      <ListGroup variant="flush">
        <ListGroup.Item>
          <a className="doc_links" href="/docentes-ads">
            Análise e Desenvolvimento de Sistemas
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a className="doc_links" href="/docentes-banco">
            Banco de Dados
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a className="doc_links" href="/docentes-gestao">
            Gestão da Produção Industrial
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a className="doc_links" href="/docentes-logistica">
            Logística
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a className="doc_links" href="/docentes-manufatura">
            Manufatura Avançada
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a className="doc_links" href="/docentes-manut">
            Manutenção de Aeronaves
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a className="doc_links" href="/docentes-pea">
            Projetos de Estruturas Aeronáuticas
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a className="doc_links" href="/docentes-dsm">
            Desenvolvimento de Software Multiplataforma
          </a>
        </ListGroup.Item>
      </ListGroup>
    </Container>

    <Footer />
  </App>
);

export default docentes;
