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

const geral_projetos = () => (
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
          <p className="sbr-titulo">PROJETOS</p>
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
          <p className="sbr-list-titulo">Lista de Projetos</p>
          <ListGroup variant="flush">
            <a className="sbr-links" href="/aerodesign">
              <ListGroup.Item>Aerodesign</ListGroup.Item>
            </a>
            <a
              className="sbr-links"
              target="_blank"
              href="https://inova.cps.sp.gov.br/"
            >
              <ListGroup.Item variant="warning">
                Agência Inova Paula Souza
              </ListGroup.Item>
            </a>
            <a className="sbr-links" href="/api">
              <ListGroup.Item>
                Aprendizagem por Projetos Integrados
              </ListGroup.Item>
            </a>
            <a className="sbr-links" href="/baja">
              <ListGroup.Item variant="warning">Baja</ListGroup.Item>
            </a>
            <a className="sbr-links" href="/cadi">
              <ListGroup.Item>CADI</ListGroup.Item>
            </a>
            <a
              className="sbr-links"
              target="_blank"
              href="http://www.cimatech.com.br"
            >
              <ListGroup.Item variant="warning">CIMATech</ListGroup.Item>
            </a>
            <a
              className="sbr-links"
              target="_blank"
              href="https://inova.cps.sp.gov.br/escola-de-inovadores/"
            >
              <ListGroup.Item>Escola de Inovadores</ListGroup.Item>
            </a>
            <a className="sbr-links" href="/business">
              <ListGroup.Item variant="warning">
                Fatec Business Mentoring
              </ListGroup.Item>
            </a>
            <a
              className="sbr-links"
              target="_blank"
              href="https://nrifatec.wordpress.com"
            >
              <ListGroup.Item>Núcleo de Relações Internacionais</ListGroup.Item>
            </a>
            <a className="sbr-links" href="/vestec">
              <ListGroup.Item variant="warning">Vestec</ListGroup.Item>
            </a>
            <a className="sbr-links" href="/workshop">
              <ListGroup.Item>Workshop de Logística Humanitária</ListGroup.Item>
            </a>
          </ListGroup>
        </Col>
      </Row>
    </Container>

    <Footer />
  </App>
);

export default geral_projetos;
