import React from "react";
import App from "../../containers/App";
import Footer from "../../components/footer";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import perfil from "../../components/images/docentes/profile.png";
import "./docentes-geral.css";

const lista = [
  {
    nome: "Fabiano Sabha Walczak (Coordenador)",
    cv: "http://lattes.cnpq.br/4250738143383384",
  },
  {
    nome: "Agliberto do Socorro Chagas",
    cv: "http://lattes.cnpq.br/9026223443410477",
  },
  {
    nome: "Ana Cecília Rodrigues Medeiros",
    cv: "http://lattes.cnpq.br/1940086892227479",
  },
  {
    nome: "Antônio Egydio São Tiago Graça",
    cv: "http://lattes.cnpq.br/0858832006050432",
  },
  {
    nome: "Antonio Wellington Sales Rios",
    cv: "http://lattes.cnpq.br/5381625486751504",
  },
  {
    nome: "Arley Ferreira de Souza",
    cv: "http://lattes.cnpq.br/3013376353724630",
  },
  {
    nome: "Cícero Soares da Silva",
    cv: "http://lattes.cnpq.br/3341430928298725",
  },
  {
    nome: "Cláudio Etelvino de Lima",
    cv: "http://lattes.cnpq.br/9330552327454666",
  },
  {
    nome: "Dawilmar Guimarães de Araújo",
    cv: "http://lattes.cnpq.br/6096388695371506",
  },
  {
    nome: "Dercy Félix da Silva",
    cv: "http://lattes.cnpq.br/7911918958263988",
  },
  {
    nome: "Diogo Branquinho Ramos",
    cv: "http://lattes.cnpq.br/2442951597646811",
  },
  {
    nome: "Eduardo Sakaue",
    cv: "http://lattes.cnpq.br/5948825528321491",
  },
  {
    nome: "Eliane Penha Mergulhão Dias",
    cv: "http://lattes.cnpq.br/8261748179517367",
  },
  {
    nome: "Emanuel Mineda Carneiro",
    cv: "http://lattes.cnpq.br/3395132054636969",
  },
  {
    nome: "Fabrício Galendes Marques de Carvalho",
    cv: "http://lattes.cnpq.br/8632801813322469",
  },
  {
    nome: "Fernando Masanori Ashikaga",
    cv: "http://lattes.cnpq.br/3324339924853354",
  },
  {
    nome: "Geraldo José Lombardi de Souza",
    cv: "http://lattes.cnpq.br/0760681088537371",
  },
  {
    nome: "Gerson da Penha Neto",
    cv: "http://lattes.cnpq.br/9441903297380731",
  },
  {
    nome: "Giuliano Araújo Bertoti",
    cv: "http://lattes.cnpq.br/4377240827813491",
  },
  {
    nome: "Jean Carlos Lourenço Costa",
    cv: "http://lattes.cnpq.br/4723982029081265",
  },
  {
    nome: "Joares Lidovino dos Reis",
    cv: "http://lattes.cnpq.br/7963698498836684",
  },
  {
    nome: "José Walmir Gonçalves Duque",
    cv: "http://lattes.cnpq.br/4678097512178887",
  },
  {
    nome: "Juliana Forin Pasquini Martinez",
    cv: "http://lattes.cnpq.br/1506784529918492",
  },
  {
    nome: "Marluce Gavião Sacramento Dias",
    cv: "http://lattes.cnpq.br/6046996954018861",
  },
  {
    nome: "Nanci de Oliveira",
    cv: "http://lattes.cnpq.br/9817633201761453",
  },
  {
    nome: "Nilo Jerônimo Vieira",
    cv: "http://lattes.cnpq.br/3077760545765491",
  },
  {
    nome: "Reinaldo Gen Ichiro Arakaki",
    cv: "http://lattes.cnpq.br/2075406788034578",
  },
  {
    nome: "Renata Cristiane Fusverk da Silva",
    cv: "http://lattes.cnpq.br/6828777883307945",
  },
  {
    nome: "Valter João de Sousa",
    cv: "http://lattes.cnpq.br/4037684544757358",
  },
];

const doc_ads = () => (
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
          <p className="subtitulo">ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</p>
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

export default doc_ads;
