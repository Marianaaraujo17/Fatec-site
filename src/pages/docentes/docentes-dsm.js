import React from "react";
import App from "../../containers/App";
import Footer from "../../components/footer";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import perfil from "../../components/images/docentes/profile.png";

const lista = [
  {
    nome: "Reinaldo Gen Ichiro Arakaki (Coordenador)",
    cv: "http://lattes.cnpq.br/2075406788034578",
  },
  {
    nome: "Cláudio Etelvino de Lima",
    cv: "http://lattes.cnpq.br/9330552327454666",
  },
  {
    nome: "Fabiano Sabha Walczak",
    cv: "http://lattes.cnpq.br/8632801813322469",
  },
  {
    nome: "Fabrício Galende Marques de Carvalho",
    cv: "http://lattes.cnpq.br/8632801813322469",
  },
  {
    nome: "Fernando Masanori Ashikaga",
    cv: "http://lattes.cnpq.br/3324339924853354",
  },
  {
    nome: "Gerson da Penha Neto",
    cv: "http://lattes.cnpq.br/9441903297380731",
  },
  {
    nome: "Jean Carlos Lourenço Costa",
    cv: "http://lattes.cnpq.br/4723982029081265",
  },
  {
    nome: "José Walmir Gonçalves Duque",
    cv: "http://lattes.cnpq.br/4678097512178887",
  },
  {
    nome: "Juliana Forin Pasquini Martinez",
    cv: "http://lattes.cnpq.br/1506784529918492",
  },
];

const doc_dsm = () => (
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
          <p className="titulo">DOCENTES</p>
          <p className="subtitulo">
            DESENVOLVIMENTO DE SOFTWARE MULTIPLATAFORMA
          </p>
        </Col>
      </Row>
    </Container>
    <Container style={{ marginBottom: "20px" }}>
      <Button href="/docentes">Voltar para a área de Docentes</Button>
    </Container>
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "50px",
      }}
    >
      <Row xs={1} md={2} className="g-4">
        {lista.map((obj) => (
          <Col>
            <a className="nome" target="_blank" href={obj.cv}>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <img src={perfil} width={150} height={150}></img>
                  </Card.Title>
                  <Card.Text>{obj.nome}</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </Container>

    <Footer />
  </App>
);

export default doc_dsm;
